
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#4287f5">
    <meta name="description" content="Webmapping Application for Arua City">
    <meta name="author" content="Dan ABUDU">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'infomap') }}</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.css" />
    <link rel="stylesheet" href="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.css">
    <link rel="stylesheet" href="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.Default.css">
    <link rel="stylesheet" href="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-locatecontrol/v0.43.0/L.Control.Locate.css">
    
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/leaflet.css') }}">
    <link rel="stylesheet" href="{{ asset('LeafletRM/dist/leaflet-routing-machine.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/MarkerCluster.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/MarkerCluster.Default.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/L.Control.Locate.Locate.css') }}">
    
    <link rel="stylesheet" href="{{ asset('assets/css/leaflet-groupedlayercontrol/leaflet.groupedlayercontrol.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">

    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('assets/img/favicon-76.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('assets/img/favicon-120.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('assets/img/favicon-152.png') }}">
    <link rel="icon" sizes="196x196" href="{{ asset('assets/img/favicon-196.png') }}">
    <link rel="icon" type="image/x-icon" href="{{ asset('assets/img/favicon.ico') }}">
  </head>

  <body>
    {{-- @include('sweetalert::alert') --}}

    @include('partials.nav')

    @include('partials.modals')

    @yield('content')
    
    @yield('scripts')
<!--
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.10.5/typeahead.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/list.js/1.1.1/list.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.js"></script>
    <script src="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js"></script>
    <script src="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-locatecontrol/v0.43.0/L.Control.Locate.min.js"></script>
-->
    <script src="{{ asset('assets/js/jquery-2.1.4.min.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/js/typeahead.bundle.min.js') }}"></script>
    <script src="{{ asset('assets/js/handlebars.min.js') }}"></script>
    <script src="{{ asset('assets/js/list.min.js') }}"></script>
    <script src="{{ asset('assets/js/leaflet.js') }}"></script>
    <script src="{{ asset('leafletRM/src/leaflet-routing-machine.js') }}"></script>
    <script src="{{ asset('assets/js/leaflet.markercluster.js') }}"></script>
    <script src="{{ asset('assets/js/L.Control.Locate.min.js') }}"></script>
    
    <script src="{{ asset('assets/js/leaflet-groupedlayercontrol/leaflet.groupedlayercontrol.js') }}"></script>
    <script src="{{ asset('assets/js/app.js') }}"></script>

    <script type="text/javascript">
        @if (count($errors) > 0)
            $('#loginModal').modal('show');
        @endif
    </script>
    {{-- <script type="text/javascript">
        @if (count($errors) > 0)
            $('#registrationModal').modal('show');
        @endif
    </script> --}}

    
  </body>
</html>

