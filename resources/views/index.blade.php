<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Fav Icon  -->
        <link rel="shortcut icon" href="{{ asset('assets') }}/images/ico/favicon.png">
		<link href="{{ asset('assets') }}/images/ico/favicon.ico" rel="shortcut icon" type="image/x-icon">
		<link href="{{ asset('assets') }}/images/ico/favicon.ico" rel="icon" type="image/x-icon">

        <!-- Site Title  -->
        <title>Booki</title>
        <!-- Bootstrap core CSS -->
		<link rel="stylesheet" href="{{ asset('assets') }}/css/bootstrap.css" >

        <!-- icofont CSS -->
		<link rel="stylesheet" href="{{ asset('assets') }}/lib/icofont/css/icofont.css"/>

        <!-- Magnific PopUP CSS -->
		<link rel="stylesheet" href="{{ asset('assets') }}/lib/Magnific-Popup/dist/magnific-popup.css" />	
        
		<!-- Custom styles for this template -->
		<link href="{{ asset('assets') }}/css/font.css" rel="stylesheet">
		<link href="{{ asset('assets') }}/css/style.css" rel="stylesheet">
		<link href="{{ asset('assets') }}/css/color.css" rel="stylesheet">

         @viteReactRefresh
         @vite(['resources/js/app.jsx'])

    </head> 
    <body>
         <div id="root"> </div>

         <!-- #back-to-top -->
		<a href="#" id="back-to-top" title="Back to top"><i class="icofont icofont-bubble-up"></i></a>	
		
		<!-- Bootstrap core JavaScript
		================================================== -->
		<!-- Placed at the end of the document so the pages load faster -->
		
		<script src="{{ asset('assets') }}/js/jquery.js"></script>
		<script src="{{ asset('assets') }}/js/jquery.easing.1.3.js"></script>
		
		<!-- Bootstrap
		================================================== -->
		<script src="{{ asset('assets') }}/js/bootstrap.min.js"></script>
		
		<!-- masonry
		================================================== -->
		<script type="text/javascript" src="{{ asset('assets') }}/lib/masonry/masonry.pkgd.min.js"></script>
        
		<!-- Google Map
		================================================== -->
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6RmKn0GXSTGTnPZd_ERtjSkWe48VOCCw"></script>
       
		<!-- Magnific-Popup
		================================================== -->
		<script src="{{ asset('assets') }}/lib/Magnific-Popup/dist/jquery.magnific-popup.min.js"></script>
		
		<!-- jquery.appear
		================================================== -->
		<script src="{{ asset('assets') }}/lib/jquery.appear/jquery.appear.js"></script>
		
		<!-- jQuery Custom
		================================================== -->
		<script src="{{ asset('assets') }}/js/custom.js" type="text/javascript"></script>
		
		<script src="{{ asset('assets') }}/js/switcher.js" type="text/javascript"></script>
		
		<!-- Contact Form
		================================================== -->
		<script src="{{ asset('assets') }}/lib/contact-form/jquery.ajaxchimp.min.js" type="text/javascript"></script>
		<script src="{{ asset('assets') }}/lib/contact-form/validate.js" type="text/javascript"></script>	
    </body>
</html>
