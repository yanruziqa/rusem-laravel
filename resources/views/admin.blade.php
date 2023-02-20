<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-skin="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Vendor CSS -->
        <link rel="stylesheet" href="/lib/remixicon/fonts/remixicon.css">

        <!-- Template CSS -->
        <link rel="stylesheet" href="/assets/css/style.min.css">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body>
        @inertia
        <script src="/lib/jquery/jquery.min.js"></script>
        <script src="/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/lib/perfect-scrollbar/perfect-scrollbar.min.js"></script>
        <script src="/lib/jquery.flot/jquery.flot.js"></script>
        <script src="/lib/jquery.flot/jquery.flot.stack.js"></script>
        <script src="/lib/jquery.flot/jquery.flot.resize.js"></script>
        <script src="/lib/chart.js/chart.min.js"></script>
        <script src="/lib/peity/jquery.peity.min.js"></script>

        <script src="/assets/js/script.js"></script>
        <script src="/assets/js/db.data.js"></script>
        <script>
            'use script'

            var skinMode = localStorage.getItem('skin-mode');
            if(skinMode) {
                $('html').attr('data-skin', 'dark');
            }
        </script>
    </body>
</html>
