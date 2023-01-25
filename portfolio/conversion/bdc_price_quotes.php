<?php

$title = "Conversion :: BDC Price Quotes";
require("../header.php");

?>

<div class="webpage-container">
<div class="container screenshot">
  <div class="row">
    <div class="col-lg-12 crumbs">
      <?php include "../breadcrumbs.php"; ?>
    </div>
  </div> <!--end breadcrumb row -->


<div class="row">
    <div class="col-lg-6 legend">
      <h2>PROJECT</h2>
      <ul>
        <li><strong>Category:</strong> Conversion pages</li>
        <li><strong>Client:</strong> Business.com</li>
        <li><strong>Date:</strong> 2018</li>
      </ul>
      <p>Prototype for Business.com's B2B conversion pages.</p>
    </div>

    <div class="col-lg-6">
      <picture>
         <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1673634183/bdc_price_utflcx.webp" type="image/webp" class="three-screens">
         <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1673634184/bdc_price_p9qbp3.jpg" alt="three screens" class="three-screens">
      </picture>
    </div>
</div>


<div class="row">
  <div id="carousel-port" class="carousel slide" data-ride="carousel" data-interval="3000">
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">

      <div class="item active">
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223067/screens/radio_buttons_c8joko.jpg" alt="image 1">
      </div>

      <div class="item">
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223059/screens/email_flkmir.jpg" alt="image 2">
      </div>

      <div class="item">
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223059/screens/optional_uy3yxg.jpg" alt="image 3">
      </div>

      <ol class="carousel-indicators">
        <li data-target="#carousel-port" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-port" data-slide-to="1"></li>
        <li data-target="#carousel-port" data-slide-to="2"></li>
      </ol>

    </div>

  </div><!-- end carousel -->
</div><!-- end row -->

</div><!-- end container -->
</div><!-- end webpage container -->
<?php include "../footer.php"; ?>
