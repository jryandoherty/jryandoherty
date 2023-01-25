<?php

$title = "Sites :: BuyerZone Homepage 2015";
require("../header.php");

?>

<div class="webpage-container">

<div class="container screenshot">
  <div class="row">
    <div class="col-md-12 crumbs">
      <?php include "../breadcrumbs.php"; ?>
    </div>
  </div> <!--end breadcrumb row -->


<div class="row">
  <div class="col-lg-6 legend">
    <h2>PROJECT</h2>
    <ul>
      <li><strong>Client:</strong> Buyerzone.com</li>
      <li><strong>Date:</strong> September 2015</li>
      <li><strong>Platform:</strong> FreeMarker/Java</li>
      <li><a href="https://github.com/jryandoherty/bz_home_2015" target="_blank"><svg viewBox="0 0 32 32" class="github">
          <path id="github" d="M28,16.297a12.00154,12.00154,0,0,1-8.19942,11.38223c-.609.11718-.82514-.25609-.82514-.57691,0-.39338.01473-1.68736.01473-3.29126a2.86307,2.86307,0,0,0-.81468-2.22177c2.6733-.297,5.479-1.31121,5.479-5.92017A4.629,4.629,0,0,0,22.421,12.44971a4.30829,4.30829,0,0,0-.11941-3.17511s-1.0057-.3226-3.29666,1.2299a11.37652,11.37652,0,0,0-6.00842,0C10.70412,8.952,9.69658,9.2746,9.69658,9.2746a4.3144,4.3144,0,0,0-.11764,3.17511,4.6369,4.6369,0,0,0-1.23517,3.21937c0,4.59747,2.80132,5.62674,5.466,5.92952a2.56331,2.56331,0,0,0-.76186,1.60391,2.55528,2.55528,0,0,1-3.49232-.99687,2.52064,2.52064,0,0,0-1.83807-1.23639s-1.172-.01509-.08243.7293a3.1772,3.1772,0,0,1,1.33234,1.755s.70433,2.33328,4.04232,1.60826c.00582,1.00121.01621,1.7557.01621,2.04051,0,.31795-.219.68834-.819.57831A11.99877,11.99877,0,1,1,28,16.297Z" fill-rule="evenodd"/>
      Code</a></li>
      <li><a href="https://www.buyerzone.com/" target="_blank">Full site</a></li>

    </ul>
  </div>

  <div class="col-lg-6">
    <picture>
       <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1674062158/buyerzone2_gpkatf.webp" type="image/webp" class="three-screens">
       <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1597339328/buyerzone2_gichpg.jpg" alt="three screens" class="three-screens">
    </picture>
  </div>
</div>

  <div class="row">
    <div id="carousel-port" class="carousel slide" data-ride="carousel" data-interval="3000">
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
            <picture>
               <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1648694029/screens/image-1_xqdqpp.webp"  type="image/webp" >
               <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/bzhome2015_bjatis.jpg" alt="image-1">
            </picture>
        </div>

        <div class="item">
            <picture>
               <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1648694029/screens/image-2_ab2qw2.webp"  type="image/webp" >
               <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648693489/screens/image-2_u6dwyd.jpg" alt="image 2">
            </picture>
        </div>

        <div class="item">
            <picture>
               <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1648694029/screens/image-3_duxwra.webp"  type="image/webp" >
               <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648693490/screens/image-3_don5rd.jpg" alt="image 3">
            </picture>
        </div>

        <div class="item">
            <picture>
               <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1648694029/screens/image-4_lrwebf.webp"  type="image/webp" >
               <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648693489/screens/image-4_vwtbzt.jpg" alt="image 4">
            </picture>
        </div>

        <ol class="carousel-indicators">
          <li data-target="#carousel-port" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-port" data-slide-to="1"></li>
          <li data-target="#carousel-port" data-slide-to="2"></li>
          <li data-target="#carousel-port" data-slide-to="3"></li>
        </ol>
      </div>

    </div><!-- end carousel -->

  </div><!-- end row -->

</div><!-- end container -->

</div>

<?php include "../footer.php"; ?>
