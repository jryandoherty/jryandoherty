<?php

$title = "Sites :: Outer Space";
require("header.php");

?>

<section class="portfolio" id="portfolio">


  <div class="tab-content">

    <div class="scroll tabs nav-tabs" role="tablist" id="myTabs">
        <a href="#sites" class="btn active" aria-controls="sites" role="tab" data-toggle="tab">Sites</a>
        <a href="#conversion" class="btn" aria-controls="conversion" role="tab" data-toggle="tab">Conversion</a>
        <a href="#emails" class="btn" aria-controls="emails" role="tab" data-toggle="tab">Emails</a>
        <a href="#brochures" class="btn" aria-controls="brochures" role="tab" data-toggle="tab">Brochures</a>
        <a href="#ads" class="btn" aria-controls="ads" role="tab" data-toggle="tab">Ads</a>
        <a href="#logos" class="btn" aria-controls="logos" role="tab" data-toggle="tab">Logos</a>
    </div>

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
