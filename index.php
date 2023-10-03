<!DOCTYPE html>
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js ie9"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta name="description" content="Website for designer and developer J. Ryan Doherty">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

  <link rel="author" href="humans.txt">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="css/portfolio.css?v=34343582">

  <title>J. Ryan Doherty :: Designer and Developer</title>

  <link rel="canonical" href="https://www.jryandoherty.com/">

<style>

.mac-wrapper {
  position:relative;
  margin:60px auto 0 auto;
  width:500px;
  height:auto;
  overflow:hidden;
  display:block;
}

.screen {
  position:relative;
  margin:0 auto;
  height:250px;
  display:block;
  background-color:white;
  border:20px solid #313742;
  border-top-left-radius:15px;
  border-top-right-radius:15px;
}

.screen-camera {
  position:absolute;
  top:-15px;
  left:50%;
  transform:translateX(-50%);
  width:10px;
  height:10px;
  background-color:#464b54;
  border-radius:100%;
}

.screen-top {
  height:15px;
  background-color:#f1f2f2;
}

.screen-bottom {
  height:50px;
  background-color:#dcdfe2;
  border-bottom-left-radius:15px;
  border-bottom-right-radius:15px;
}

.screen-stand {
  margin:0 auto;
  width:35%;
  height:50px;
  background-color:#dcdfe2;
  border-top:6px solid #d1d6da;
}

.screen-stand-bottom {
  margin:0 auto;
  width:50%;
  height:10px;
  background-color:#d1d6da;
}
</style>

</head>

<body class="homepage">
      <!--[if lt IE 10]>
          <p class="chromeframe">Your browser is dangerously, dangerously out of date. I'm surprised your computer has not exploded yet. To prevent a black hole from opening up in your living room and/or office, please <a href="http://browsehappy.com/" target="_blank" onclick="s.tl(this,'e','AnotherSite',null)">upgrade your browser</a> right now! Do not pass go, and whatever you do, do not collect 200 dollars, euros, rubles or other currency.</p>
      <![endif]-->

<header class="brick">

<div class="container-fluid">
    <div class="col-lg-6 intro">
        <h1>j. ryan doherty</h1>
        <h2>designer & developer</h2>
    </div>

    <div class="col-lg-6">
      <?php include "portfolio/stickers.php"; ?>
    </div>
</div>

</header><!-- end brick hero section -->

<section class="about-section" id="about">

  <div class="container-fluid">
    <h2>About</h2>
    <div class="col-lg-6 bio">
 I've been working on the web since the early 2000s doing freelance, corporate, and non-profit work ranging from full site
 design, landing pages, conversion pages, and marketing emails. So many changes during that time! But that's the fun part.
 When I'm not designing or writing code, you can find me out <a href="https://en.wikipedia.org/wiki/Birdwatching" target="_blank">birding</a>.
    </div>


  <div class="col-lg-6">

    <picture>
       <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1650997088/portrait_tbsdrz.webp" type="image/webp" >
       <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1650997088/portrait_jci1ne.jpg" alt="me">
    </picture>
  </div>

  </div><!-- end container -->

</section><!-- end about me -->

<section class="recent-work" id="recent">

  <div class="container-fluid">
    <h2>Recent Work</h2>

    <div class="mac-wrapper">
      <div class="screen">
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573002/thumbs_sites/partner_o8w0ps.jpg">
        <div class="screen-camera"></div>

      </div>
      <div class="screen-bottom"></div>
      <div class="screen-stand"></div>
      <div class="screen-stand-bottom"></div>
    </div>


  <div class="col-lg-12">
    <img src="/portfolio/2023/outerspace/phone-home.png" alt="mobile">
    <img src="/portfolio/2023/outerspace/ipad-home.png" alt="tablet">
    <img src="/portfolio/2023/outerspace/instagram.jpg" alt="instragram">
    <img src="/portfolio/2023/outerspace/os-black.svg" alt="logo">
    <img src="/portfolio/2023/outerspace/price-list.jpg" alt="pdf">
  </div>

  </div><!-- end container -->

</section><!-- end about me -->

<?php include "contact_alt.php"; ?>

<?php include "footer.php"; ?>
