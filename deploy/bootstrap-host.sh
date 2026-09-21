#!/usr/bin/env bash
#
# Prepare a fresh Debian or Ubuntu host: Docker, automatic security updates,
# and a firewall that exposes only SSH and the web ports.
#
#   sudo ./deploy/bootstrap-host.sh
#
# Safe to re-run.
set -euo pipefail

if [[ $EUID -ne 0 ]]; then
    echo "run this with sudo" >&2
    exit 1
fi

echo "==> packages"
apt-get update -qq
apt-get install -y -qq ca-certificates curl gnupg unattended-upgrades ufw

if ! command -v docker >/dev/null 2>&1; then
    echo "==> docker"
    install -m 0755 -d /etc/apt/keyrings
    . /etc/os-release
    curl -fsSL "https://download.docker.com/linux/${ID}/gpg" \
        | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    chmod a+r /etc/apt/keyrings/docker.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/${ID} $(. /etc/os-release && echo "$VERSION_CODENAME") stable" \
        > /etc/apt/sources.list.d/docker.list
    apt-get update -qq
    apt-get install -y -qq docker-ce docker-ce-cli containerd.io \
        docker-buildx-plugin docker-compose-plugin
else
    echo "==> docker already installed"
fi

# The production overlay uses the !override tag, which needs Compose 2.24+.
compose_version=$(docker compose version --short 2>/dev/null || echo "0")
echo "==> docker compose $compose_version"
case "$compose_version" in
    2.[0-9].*|2.1[0-9].*|2.2[0-3].*|0)
        echo "    warning: deploy/compose.prod.yaml needs Compose 2.24 or newer." >&2
        ;;
esac

echo "==> unattended security upgrades"
cat > /etc/apt/apt.conf.d/20auto-upgrades <<'CONF'
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
CONF
systemctl enable --now unattended-upgrades >/dev/null 2>&1 || true

echo "==> firewall"
ufw --force reset >/dev/null
ufw default deny incoming >/dev/null
ufw default allow outgoing >/dev/null
ufw allow OpenSSH >/dev/null
ufw allow 80/tcp >/dev/null
ufw allow 443/tcp >/dev/null
ufw allow 443/udp >/dev/null
ufw --force enable >/dev/null
ufw status numbered

cat <<'NOTE'

==> done

    Docker publishes container ports by writing straight to iptables, which
    bypasses ufw. That is why the production overlay publishes nothing except
    Caddy's 80 and 443: neither the app nor MySQL is reachable from outside
    the compose network regardless of what ufw says.
NOTE
