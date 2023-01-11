<?php

$title = "Sites :: BuyerZone homepage 2013";
require("../header.php");

?>


<div class="container screenshot">
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-8 crumbs">
      <?php include "../breadcrumbs.php"; ?>
    </div>
  </div> <!--end breadcrumb row -->

<div class="legend">
  <h2>PROJECT</h2>
  <ul>
    <li>Category: Sites and Mini-sites</li>
    <li>Client: Buyerzone.com</li>
    <li>Date: 2013</li>
    <li><a href="https://web.archive.org/web/20131120165520/http://www.buyerzone.com/" target="_blank">Archive page</a></li>

  </ul>
  <p>New responsive homepage for BuyerZone.com, an online lead generation service.</p>
</div>

<div class="row">
  <div id="carousel-port" class="carousel slide" data-ride="carousel" data-interval="3000">
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">

          <div class="col-lg-12"><img src="/portfolio/2013/homepage/image-2.jpg" alt="image 1"></div>

      </div>
      <div class="item">

        <div class="col-lg-12"><img src="/portfolio/2013/homepage/image-1.jpg" alt="image 2"></div>

      </div>

      <div class="item">

        <div class="col-lg-12"><img src="/portfolio/2013/homepage/image-3.jpg" alt="image 3"></div>

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

<?php include "../footer.php"; ?>
