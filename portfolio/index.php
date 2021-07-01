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
  <link rel="stylesheet" href="/css/portfolio.css?v=20301">

  <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@700&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&display=swap" rel="stylesheet">

  <title>J. Ryan Doherty :: Portfolio</title>

  <link rel="canonical" href="https://www.jryandoherty.com/portfolio/">

</head>

<body class="portfolioPage">
      <!--[if lt IE 10]>
          <p class="chromeframe">Your browser is dangerously, dangerously out of date. I'm surprised your computer has not exploded yet. To prevent a black hole from opening up in your living room and/or office, please <a href="http://browsehappy.com/" target="_blank" onclick="s.tl(this,'e','AnotherSite',null)">upgrade your browser</a> right now! Do not pass go, and whatever you do, do not collect 200 dollars, euros, rubles or other currency.</p>
      <![endif]-->

<div class="brick">


<div class="container-fluid">
    <div class="col-lg-6" style="min-width: 425px;display:flex;align-items: center;
flex-direction: column;">

        <!--<a class="navbar-brand" href="#"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1596733831/logo_qlypql.svg" alt="j. ryan doherty"></a>-->
        <h1><a href="/portfolio/">j. ryan doherty</a></h1>
        <h2>designer & developer</h2>
  <?php include "socials.php"; ?>




    </div>

    <div class="col-lg-6">
    <?php include "stickers.php"; ?>
    </div>
  </div>




</div><!-- end brick hero section -->

<div class="about-section" id="about">

  <div class="container">
    <div class="col-lg-6">

    </div>

  </div><!-- end container -->


</div><!-- end about me -->

<div class="container" id="portfolio">
  <div class="btn-group" data-toggle="buttons">
    <label class="btn btn-primary active">
      <input type="radio" autocomplete="off"> <a href="#sites">Sites & mini-sites</a>
    </label>
    <label class="btn btn-primary">
      <input type="radio" autocomplete="off"> <a href="#conversion">Converson Pages</a>
    </label>
    <label class="btn btn-primary">
      <input type="radio" autocomplete="off"> <a href="#emails">Emails</a>
    </label>

    <label class="btn btn-primary">
      <input type="radio" autocomplete="off"> <a href="#ads">Ads</a>
    </label>
    <label class="btn btn-primary">
      <input type="radio" autocomplete="off"> <a href="#logos">Logos</a>
    </label>
  </div>

</div>


<?php include "sites.php"; ?>
<?php include "conversion.php"; ?>
<?php include "emails.php"; ?>
<?php include "ads.php"; ?>
<?php include "brochures.php"; ?>
<?php include "logos.php"; ?>


<?php include "../contact_alt.php"; ?>

<?php include "footer.php"; ?>
