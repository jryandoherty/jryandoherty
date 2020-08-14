<!DOCTYPE html>
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js ie9"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/jryan.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">

    <title>J. Ryan Doherty :: web desinger and developer</title>

    <link rel="canonical" href="https://www.jryandoherty.com">

</head>

<body class="home">
      <!--[if lt IE 10]>
          <p class="chromeframe">Your browser is dangerously, dangerously out of date. I'm surprised your computer has not exploded yet. To prevent a black hole from opening up in your living room and/or office, please <a href="http://browsehappy.com/" target="_blank" onclick="s.tl(this,'e','AnotherSite',null)">upgrade your browser</a> right now! Do not pass go, and whatever you do, do not collect 200 dollars, euros, rubles or other currency.</p>
      <![endif]-->

<div class="brick-background">

<div class="container">

<?php include "navigation.php"; ?>


<div class="col-md-4 introText">
  <!--<p class="glyphicon glyphicon-eject">ui/ux design</p>-->
   <a href="#customers"><p>Affordable design solutions for small companies, non-profit organizations &amp; individuals.</p></a>
<!--  <p>brand development</p> -->

</div>


</div><!-- end brick container -->


</div><!-- end brick hero section -->

<!--<img src="/img/border.png" style="max-width:100%;height:15px;display:block">-->

<?php include "recent.php"; ?>


<?php include "branding.php"; ?>


<?php include "customers.php"; ?>


<?php include "contact.php"; ?>



<footer>
<div class="container">

  	<div class="col-md-9">
      <p>&copy; <script>document.write(new Date().getFullYear());</script> J. Ryan Doherty</p></div>


  <div class="col-md-5">
  <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1596733831/logo_qlypql.svg" alt="j. ryan doherty">
</div>

</div><!-- /.container -->
</footer><!-- end footer -->



<!-- jQuery -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<script src="form.js"></script>



<script>
	$("li.home").addClass("active");
	$('#FirstName').focus();
  $('.carousel').carousel();
</script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-125806401-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-125806401-1');
</script>

</body>
</html>
