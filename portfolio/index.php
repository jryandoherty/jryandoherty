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
  <link rel="stylesheet" href="/css/portfolio.css?v=3434">


  <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@700&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&display=swap" rel="stylesheet">

  <title>J. Ryan Doherty :: Designer and Developer</title>

  <link rel="canonical" href="https://www.jryandoherty.com/">

</head>

<body class="homepage">
      <!--[if lt IE 10]>
          <p class="chromeframe">Your browser is dangerously, dangerously out of date. I'm surprised your computer has not exploded yet. To prevent a black hole from opening up in your living room and/or office, please <a href="http://browsehappy.com/" target="_blank" onclick="s.tl(this,'e','AnotherSite',null)">upgrade your browser</a> right now! Do not pass go, and whatever you do, do not collect 200 dollars, euros, rubles or other currency.</p>
      <![endif]-->

<section class="brick">


<div class="container-fluid">
    <div class="col-lg-6 logo">

        <h1>j. ryan doherty</h1>
        <h2>designer & developer</h2>
        <!-- Collect the nav links, forms, and other content for toggling -->

    </div>

    <div class="col-lg-6">
    <?php include "stickers.php"; ?>
    </div>

</div>




</section><!-- end brick hero section -->

<section class="about-section" id="about">

  <div class="container-fluid">
    <div class="col-lg-6 bio">
 I'v been working on the web since the early 2000s doing freelance, corporate, and non-profit work ranging from full-stack sites
 design, landing pages, logos, conversion pages, and marketing emails. So many changes during that time! But that's the fun part.
 I'm always looking for new projects, whether you need help with that Wordpress theme that looked so easy or you need someone in-house for a
 6-month+ assignment, I'm interested. <small>--Ryan</small>
</div>

    <div class="col-lg-6" >
<img src="/img/DSC_1000.jpg" class="" alt="me">
    </div>

  </div><!-- end container -->


</section><!-- end about me -->

<section class="portfolio" id="portfolio">


  <div class="scroll" >

      <a href="#sites" class="btn">Sites</a>
      <a href="#conversion" class="btn">Conversion</a>
      <a href="#emails" class="btn">Emails</a>
      <a href="#emails" class="btn">Brochures</a>
      <a href="#ads" class="btn">Ads</a>
      <a href="#logos" class="btn">Logos</a>

  </div>



<?php include "sites.php"; ?>
<img src="../img/border.png" alt="" class="divider">
<?php include "conversion.php"; ?>
<img src="../img/border.png" alt="" class="divider">
<?php include "emails.php"; ?>
<img src="../img/border.png" alt="" class="divider">
<?php include "ads.php"; ?>
<img src="../img/border.png" alt="" class="divider">
<?php include "logos.php"; ?>
</section>

<?php include "contact.php"; ?>

<?php include "footer.php"; ?>
