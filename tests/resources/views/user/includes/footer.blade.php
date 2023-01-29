<?php $settings = \App\Setting::pluck('value', 'name')->all(); ?>
<footer class="footer text-center"> {{$settings['footer_text']}} </footer>
