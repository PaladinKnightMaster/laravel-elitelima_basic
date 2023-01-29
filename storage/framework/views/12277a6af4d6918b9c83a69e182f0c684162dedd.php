<!DOCTYPE html>
<html>
<?php echo $__env->make('themes.main-theme.includes.head', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>


<body>
<?php echo $__env->make('themes.main-theme.includes.nav', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
<?php echo $__env->make('themes.main-theme.includes.header', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <?php echo $__env->yieldContent('content'); ?>
<?php echo $__env->make('themes.main-theme.includes.footer', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
<?php echo $__env->make('themes.main-theme.includes.scripts', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

</body>
</html>


