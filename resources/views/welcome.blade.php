<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>Laravel</title>
        <link href="{{ asset('css/tabler/tabler-flags.min.css')}}" rel="stylesheet"/>
        <link href="{{ asset('css/tabler/tabler.min.css')}}" rel="stylesheet"/>
        <link href="{{ asset('css/tabler/tabler-payments.min.css')}}" rel="stylesheet"/>
        <link href="{{ asset('css/tabler/tabler-vendors.min.css')}}" rel="stylesheet"/>
        <link href="{{ asset('css/tabler/demo.min.css')}}" rel="stylesheet"/>
    </head>
    <body>
        <div id="example"></div>
        <script src="{{ asset('js/app.js') }}"></script>
        <script src="{{ asset('js/tabler/tabler.min.js')}}"></script>
        <script src="{{ asset('js/demo.min.js')}}"></script>
    </body>
</html>
