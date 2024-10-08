<!DOCTYPE html>
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js ie9"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">


  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="/css/portfolio.css?v=3435412">


  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@500&display=swap" rel="stylesheet">

  <title>J. Ryan Doherty :: Designer and Developer</title>

  <link rel="canonical" href="https://www.jryandoherty.com/">

</head>

<body class="homepage">
      <!--[if lt IE 10]>
          <p class="chromeframe">Your browser is dangerously, dangerously out of date. I'm surprised your computer has not exploded yet. To prevent a black hole from opening up in your living room and/or office, please <a href="http://browsehappy.com/" target="_blank" onclick="s.tl(this,'e','AnotherSite',null)">upgrade your browser</a> right now! Do not pass go, and whatever you do, do not collect 200 dollars, euros, rubles or other currency.</p>
      <![endif]-->

<section class="brick">


<div class="container-fluid">
    <div class="col-lg-6">

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
 I've been working on the web since the early 2000s doing freelance, corporate, and non-profit work ranging from full site
 design, landing pages, logos, conversion pages, and marketing emails. So many changes during that time! But that's the fun part.
 I'm always looking for new projects, whether you need help with that Wordpress theme that looked so easy or you need someone in-house for a
 6-month+ assignment, I'm interested.
    </div>

  <!--  <div class="col-lg-6" >
      <img src="/img/DSC_1000.jpg" class="" alt="me">
    </div>

  </div><!-- end container -->


</section><!-- end about me -->

<section class="portfolio" id="portfolio">

  <div class="scroll tabs nav-tabs" role="tablist" id="myTabs">

      <a href="#sites" class="btn active" aria-controls="sites" role="tab" data-toggle="tab">Sites</a>
      <a href="#conversion" class="btn" aria-controls="conversion" role="tab" data-toggle="tab">Conversion</a>
      <a href="#emails" class="btn" aria-controls="emails" role="tab" data-toggle="tab">Emails</a>
      <a href="#brochures" class="btn" aria-controls="brochures" role="tab" data-toggle="tab">Brochures</a>
      <a href="#ads" class="btn" aria-controls="ads" role="tab" data-toggle="tab">Ads</a>
      <a href="#logos" class="btn" aria-controls="logos" role="tab" data-toggle="tab">Logos</a>

  </div>


  <div class="tab-content">
    <?php include "sites.php"; ?>

    <?php include "conversion.php"; ?>

    <?php include "emails.php"; ?>

    <?php include "brochures.php"; ?>

    <?php include "ads.php"; ?>

    <?php include "logos.php"; ?>

  </div>

</section>
<img src="/img/border.png" alt="" class="divider">

<?php include "contact_alt.php"; ?>

<?php include "footer.php"; ?>
