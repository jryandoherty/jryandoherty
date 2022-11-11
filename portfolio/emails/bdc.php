<?php

$title = "Email :: BDC Question Alert";
require("../header.php");

?>

<div class="container emails">

  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-8 crumbs">
      <?php include "../breadcrumbs.php"; ?>
    </div>
  </div> <!--end breadcrumb row -->

<div class="row">
  <div class="col-lg-8 desktop">
    <object data="/portfolio/2017/emails_bdc/template_Nov.html"
            width="100%" height="500">
    </object>
  </div>

  <div class="col-lg-4 mobile">
    <object data="/portfolio/2017/emails_bdc/template_Nov.html"
            width="100%" height="500">
    </object>
  </div>
</div>
</div><!-- end container -->

<?php include "../footer.php"; ?>
