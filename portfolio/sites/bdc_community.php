<?php

$title = "Sites :: BDC Community";
require("../header.php");

?>

<div class="webpage-container">

<div class="container screenshot">
  <div class="row">
    <div class="col-lg-12 crumbs">
      <?php include "../breadcrumbs.php"; ?>
    </div>
  </div> <!--end breadcrumb row -->

<div class="legend">
  <h2>PROJECT</h2>
  <ul>
    <li><strong>Category:</strong> Sites and mini-sites</li>
    <li><strong>Client:</strong> Business.com</li>
    <li><strong>Date:</strong> 2018</li>
  </ul>
  <p>Prototypes for a redesign of Business.com's community page.</p>
</div>

<div class="row">
  <div id="carousel-port" class="carousel slide" data-ride="carousel" data-interval="3000">
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">

      <div class="item active">
        <img src="/portfolio/2018/community/image-1.png" alt="image 1">
      </div>
      <div class="item">
      <img src="/portfolio/2018/community/image-2.png" alt="image 2">
      </div>
      <div class="item">
        <img src="/portfolio/2018/community/image-3.png" alt="image 3">
      </div>

      <ol class="carousel-indicators">
        <li data-target="#carousel-port" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-port" data-slide-to="1"></li>
        <li data-target="#carousel-port" data-slide-to="2"></li>
      </ol>
    </div><!-- end carousel inner -->

  </div><!-- end carousel -->
  </div><!-- end row -->

</div><!-- end container -->

</div>
<?php include "../footer.php"; ?>
