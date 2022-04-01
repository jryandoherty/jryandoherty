<?php include "../header.php"; ?>

<div class="container screenshot">
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-8 crumbs">
      <?php include "../breadcrumbs.php"; ?>
    </div>
  </div> <!--end breadcrumb row -->

<div class="row">
  <div id="carousel-port" class="carousel slide" data-ride="carousel" data-interval="3000">
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
          <div class="col-lg-12"><img src="/portfolio/2022/maavian/image-1.jpg" alt="image 1"></div>
      </div>

      <div class="item">
        <div class="col-lg-12"><img src="/portfolio/2022/maavian/image-2.jpg" alt="image 2"></div>
      </div>

      <div class="item">
        <div class="col-lg-12"><img src="/portfolio/2022/maavian/image-3.jpg" alt="image 3"></div>
      </div>

      <ol class="carousel-indicators">
        <li data-target="#carousel-port" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-port" data-slide-to="1"></li>
        <li data-target="#carousel-port" data-slide-to="2"></li>
      </ol>
    </div>

  </div><!-- end carousel -->
</div><!-- end row -->

  <div class="legend">
    <h2>PROJECT</h2>
    <ul>
      <li><strong>Client:</strong> Massachusetts Avian Records</li>
      <li><strong>Date:</strong> January 2022</li>
      <li><strong>Platform:</strong> Wordpress</li>
      <li><strong>Theme:</strong> Teluro</li>
      <li><a href="https://www.maavianrecords.com" target="_blank">Live page</a></li>
    </ul>
      <p>Wordpress site for non-profit Massachusetts Avian Records Committee.</p>
  </div>

</div><!-- end container -->

<?php include "../footer.php"; ?>
