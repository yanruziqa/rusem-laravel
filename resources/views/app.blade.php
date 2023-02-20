<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Font CSS -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">

        <!-- Vendor CSS (Bootstrap & Icon Font) -->
        <link rel="stylesheet" href="{{ asset('static/css/vendor/fontawesome-all.min.css') }}">
        <link rel="stylesheet" href="{{ asset('static/css/vendor/edumall-icon.css') }}">
        <link rel="stylesheet" href="{{ asset('static/css/vendor/bootstrap.min.css') }}">

        <!-- Plugins CSS (All Plugins Files) -->
        <link rel="stylesheet" href="{{ asset('static/css/plugins/perfect-scrollbar.css') }}">
        <link rel="stylesheet" href="{{ asset('static/css/plugins/jquery.powertip.min.css') }}">
        <link rel="stylesheet" href="{{ asset('static/css/plugins/glightbox.min.css') }}">
        <link rel="stylesheet" href="{{ asset('static/css/plugins/flatpickr.min.css') }}">
        <link rel="stylesheet" href="{{ asset('static/css/plugins/ion.rangeSlider.min.css') }}">
        <link rel="stylesheet" href="{{ asset('static/css/plugins/select2.min.css') }}">

        <!-- Style CSS -->
        <link rel="stylesheet" href="{{ asset('static/css/style.css') }}">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body>
        @inertia
        <!-- JS Vendor, Plugins & Activation Script Files -->

        <!-- Vendors JS -->
        <script src="{{ asset('static/js/vendor/modernizr-3.11.7.min.js') }}"></script>
        <script src="{{ asset('static/js/vendor/jquery-3.6.0.min.js') }}"></script>
        <script src="{{ asset('static/js/vendor/jquery-migrate-3.3.2.min.js') }}"></script>
        <script src="{{ asset('static/js/vendor/bootstrap.bundle.min.js') }}"></script>

        <!-- Plugins JS -->
        <script src="{{ asset('static/js/plugins/parallax.js') }}"></script>
        <script src="{{ asset('static/js/plugins/perfect-scrollbar.min.js') }}"></script>
        <script src="{{ asset('static/js/plugins/jquery.powertip.min.js') }}"></script>
        <script src="{{ asset('static/js/plugins/nice-select.min.js') }}"></script>
        <script src="{{ asset('static/js/plugins/glightbox.min.js') }}"></script>
        <script src="{{ asset('static/js/plugins/jquery.sticky-kit.min.js') }}"></script>
        <script src="{{ asset('static/js/plugins/imagesloaded.pkgd.min.js') }}"></script>
        <script src="{{ asset('static/js/plugins/masonry.pkgd.min.js') }}"></script>
        <script src="{{ asset('static/js/plugins/flatpickr.js') }}"></script>
        <script src="{{ asset('static/js/plugins/range-slider.js') }}"></script>
        <script src="{{ asset('static/js/plugins/select2.min.js') }}"></script>


        <!-- Activation JS -->
        <script src="{{ asset('static/js/main.js') }}"></script>
    </body>
</html>
