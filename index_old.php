<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js ie9"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="scss/jryan.css">

    <title>J. Ryan Doherty :: web desinger and developer</title>

    <link rel="canonical" href="">

</head>

<body class="home">
      <!--[if lt IE 10]>
          <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" target="_blank" onclick="s.tl(this,'e','AnotherSite',null)">upgrade your browser</a> to improve your experience.</p>
      <![endif]-->
<div class="bg-img">


<nav class="navbar navbar-default" style="position:absolute;z-index:10000">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>




<div id="about"></div>
<div id="contact"></div>
<div id="services"></div>
<div id="portfolio" onclick="location.href='portfolio.php'"></div>


<img src="img/logo_large.png" width="420" alt=""/>

</div>



    <div class="primaryMessage">
    <div class="container">

        <div class="mobile-heading span4">
        <p>Website monetization for the modern affiliate</p>
        </div>

        <div class="span7 message pull-right">
          <h2>Join our B2B partner network and see how you can maximize your website traffic</h2>
        </div>

    </div><!-- end container -->
    </div><!-- end primary -->

        <div class="firstMessage">
         <div class="container">
         	 <a id="form" name="form"></a>
            <div class="span4 getInTouch pull-left"><h3>Get in touch to learn more about partnering with us.</h3></div>
                <div class="span7 pull-right">
                  <img src="[@makeAbsoluteUrl '/pages/affiliates/img/arrow.png'/]" class="arrow" alt="" />
                </div>
         </div>
       </div>


<div id="purchases">
 	<div class="container">
            <div class="row">
            	<div class="col-lg-9"><h2><strong>WHAT DOES YOUR BUSINESS NEED?</strong></h2></div>
            </div>






            <div class="col-lg-5 pull-right"><a href="[@generateExternalUrl '/directory-category/'/]" class="btn btn-large btn-custom2">See all products &amp; services</a></div>

    </div><!-- /.container -->
</div><!-- end lowerpage containter -->


<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<script>
 $("a.smoothscroll").click(function(){
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 400);
			return false;
			});
</script>

<script type="text/javascript">
	$("li.home").addClass("active");
	$('#FirstName').focus();
</script>

</body>
</html>
