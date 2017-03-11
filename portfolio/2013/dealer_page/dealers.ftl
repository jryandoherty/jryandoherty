[#-- macros --]
	[#import "/spring.ftl" as spring /]
	[#include "/macro/GlobalMacros.ftl" /]
	[#include "/macro/BuyerZoneMacros.ftl" /]
	[#assign pageName = 'Lead Generation Programs']
	[#assign sampleLeadUrl = '/pages/sample/sampleSupplierLead.ftl']
	[#assign leadGenCatName = '']
	[#assign leadCat = '']
	[#assign leadSource = 'Inbound Reg Form']


<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js lt-ie8 "> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js"> <!--<![endif]--><head>
		<meta charset="utf-8">
        <meta name="description" content="BuyerZone, the leader in online B2B lead generation, delivers high quality sales leads with the ROI needed to help your business grow.">
        <meta name="viewport" content="width=device-width">
        <meta name="robots" content="noindex, follow">

 <!--[if lt IE 9]>[@processOnce '/scripts/libs/html5shiv.js'; fileUrl]<script type="text/javascript" src="${fileUrl}"></script>[/@]<![endif]-->
       	[@processOnce "/sass/css/seller.css"; fileUrl]<link rel="stylesheet" href="${fileUrl}"/>[/@]   

<style>
.span3, .span12 {border:none;border-radius:0;background:none;text-align:left}
h3 {font-size:20px;line-height:26px}
ul.nav{color:#FFF;font-size:18px;font-family: 'Avenir LT W01 85 Heavy'}
.navbar .brand {margin: 2px 0 0 6px}
.introMessage {margin-top:70px;margin-bottom:60px;background:none;color:#464646;width:600px}
.secondaryHeader {font-size:2.5em;padding-bottom:20px}
.leadsHeader {font-size:2.5em}
.blogHeader {font-size:2.75em;line-height:36px}
.primaryMessage {background:url('/bzng/pages/leads/img/bg_dealer2.jpg') center top no-repeat}
.guide {padding-left:100px;background:url('/bzng/pages/leads/img/reference2.png') no-repeat}
.checklist {padding-left:90px;background:url('/bzng/pages/leads/img/checklist.png') no-repeat}
.featuredResource {background:url('/bzng/pages/leads/img/bg_blog.jpg')no-repeat;padding-top:40px}
.tips {padding-left:80px;background:url('/bzng/pages/leads/img/success.png') no-repeat}
.row-fluid{margin-top:60px}
.resourceRow {margin-bottom:-40px;border-bottom:2px solid #666}
.resourceRow2 {border-bottom:2px solid #333;padding-bottom:20px}
.secondResource {clear:left;margin-top:100px}
.secondResource2 {margin-top:100px}
.blogButton {padding-bottom:70px}
.address {clear:left;color:#000;font-size:11px;line-height:14px}
.socialContainer {clear:left;padding-top:20px}
.lowerPage {background:url(/bzng/pages/leads/img/bg_tray.png) top repeat-x #ffffff;padding:0 20px}
.ie9 .introMessage {position:static}
.lt-ie9 .introMessage {position:static}
.lt-ie8 .introMessage {position:static}
.btn-custom4:after {
content:none;

}

footer {background:#FFFFFF;color:#666}
footer a {color:#006}
footer ul li {float:left;border:none;margin-right:10px}
footer ul.bbbLogos {padding-top:0}
footer .row-fluid{margin-top:0}
footer .bzApp {color:#CCC}

@media (max-width: 1200px) {
.span3 {width:200px}
img.leadFormats {width:470px;height:auto}
}

@media (max-width:980px) {
.span3 {
    width: 95%;margin-left:5%}
.secondaryHeader {margin-left:5%}
.checklist {margin-bottom:50px;background:url('/bzng/pages/leads/img/checklist.png') no-repeat #ffffff;}
.guide{margin-bottom:50px}
.featuredResource {margin-top:50px}
.leadsHeader {line-height:36px}
.introMessage {margin-top:20px;padding:0;margin-left:5%;width:90%}
.secondResource2 {margin-top:0}
.primaryMessage {padding-top:0}
}
</style>

[#-- page title --]
	
    <title>Prescreened B2B Sales Leads to Fill Your Sales Pipeline - BuyerZone</title>

[#-- canonical --]
	<link rel="canonical" href="http://www.buyerzone.com/leads/">



[#-- javascript --]

[@processOnce "/pages/leads/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"; fileUrl]<script type="text/javascript" src="${fileUrl}"></script>[/@]

</head>

<body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
      
    
    [#-- header --]
    <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>
                    <a class="brand" href="[@generateExternalUrl '/index.html'/]"></a>
		<div class="nav-collapse collapse">                       
                        <form class="navbar-form pull-right" action="http://www.buyerzone.com/leads/contact/" method="get">
                          <ul class="nav">
                          <li><a href="tel:8883935000" title="Call us today">Customer Care: 888-393-5000</a></li>
                          <li><a href="mailto:customercare@buyerzone.com">customercare@buyerzone.com</a></li>
                          </ul>  
                        </form>
                  </div>
                </div>
            </div>
        </div>
       
    [#-- main content --]
  
    <div class="primaryMessage">
    <div class="container">

        <div class="introMessage">
        <h1><span>Dealer Resource Center</span></h1>
        <p >Welcome to the BuyerZone Dealer Resource Center! Here, you'll find everything you need to know about how to succeed with our lead generation program. From basic program information to tips and advice, we have you covered.</p>
        </div>
<p class="secondaryHeader">Start Here:</p>
             
    <div class="span3 guide">
            <h3><strong>Reference Guide</strong></h3>
            <p> Download our reference guide to learn more about our lead standard, credit policy and more. </p>
      <p><a href="http://www.buyerzone.com/global-images/New_Seller_Reference_Guide.pdf" role="button" class="btn btn-custom4"><img src="[@makeAbsoluteUrl '/pages/leads/img/pdf.png'/]" width="33" height="33">Download now.</a></p>
            </div> 
    <div class="span3 checklist">
            <h3><strong>Getting Started Checklist</strong></h3>
            <p> Make sure all of your ducks are in a row. This handy checklist will get you set up for success.</p>
      <p><a href="http://www.buyerzone.com/global-images/BZ_Getting_Started_Checklist.pdf" role="button" class="btn btn-custom4"><img src="[@makeAbsoluteUrl '/pages/leads/img/pdf.png'/]" width="33" height="33">Download now.</a></p>
            </div> 
<div class="span3 tips">
              <h3><strong>Tips for Success</strong></h3>
              <p> We've compiled a few key tips we learned over the years to help boost your close rate.</p>
      <p><a href="http://www.buyerzone.com/global-images/BZ_Tips_For_Success.pdf" role="button" class="btn btn-custom4"><img src="[@makeAbsoluteUrl '/pages/leads/img/pdf.png'/]" width="33" height="33">Download now.</a></p>
              </div>
    
  </div><!-- end container -->     
</div><!-- end primary -->     
        
 
<div class="lowerPage">
  <div class="container">
   <img src="[@makeAbsoluteUrl '/pages/leads/img/marker_tray.png'/]" alt="" class="marker_tray">

            
    <div class="row-fluid">
  		<div class="span12">
            <div class="span6">
            <p class="leadsHeader">Leads how you want them.</p>
            <p>Quality leads delivered to you in near real-time is our life's mission. 
And we can deliver those leads to you in multiple formats beyond
email.  From direct integration with Salesforce.com, to bulk
CSV files or XML feeds, we have you covered. And if you're on the 
road, we can send leads to you via text message.</p>
<p><em>Contact your account manager or our Customer Care team at 888-393-5000 or <a href="mailto:customercare@buyerzone.com">customercare@buyerzone.com</a> to learn more.</em></p>  

</div>
      <img src="[@makeAbsoluteUrl '/pages/leads/img/lead_formats_v2.png'/]" width="600" height="125" class="leadFormats" ></div> 
      </div>
         
    <div class="row-fluid resourceRow">
            <p class="leadsHeader">Leads generation resources.</p>
            <p> We love sharing our thoughts on lead generation, online marketing and more. Check out what we're writing about:</p>
      </div>
   
    <div class="row-fluid resourceRow2">
            <div class="span7">
            <div class="span4"> <a href="[@generateExternalUrl '/pages/whitepapers/online-lead-generation.pdf'/]" class="resource-thumb" title="Art and Science of Lead Gen"><img src="[@makeAbsoluteUrl '/images/leadGen/artScience_300.jpg' /]" width="200" alt="Art and Science of Lead Gen" style="border:3px solid #333" ></a></div>
            
          <div class="span7">
             <h3><strong>Whitepaper:</strong> The Art and Science of Online Lead Generation</h3>
          <p>Read our latest whitepaper on how to successfully work online leads. From targeting, lead channels, sales follow-up, tracking and more. Learn directly from the experts.</p>
              <a href="[@generateExternalUrl '/pages/whitepapers/online-lead-generation.pdf'/]" role="button" class="btn btn-large btn-custom4">Download the whitepaper now.</a>         </div>
        
        
         <div class="span4 secondResource"><a href="[@generateExternalUrl '/leads/resources/buyers-share-their-secrets-infographic/'/]" class="resource-thumb" title="Buyer Satisfaction"><img src="[@makeAbsoluteUrl '/pages/leads/img/buyers_share.png' /]" alt="Buyer Satisfaction" width="200"></a></div>
            
          <div class="span7 secondResource2">
            <h3><strong>Infographic:</strong> Buyers Share Their Secrets</h3>
          <p>From  the importance of your emails and website to the content buyers want (and don't  want) from you, learn the secrets to closing more business.</p>
  
              <a href="[@generateExternalUrl '/leads/resources/buyers-share-their-secrets-infographic/'/]" role="button" class="btn btn-large btn-custom4" >Download the infographic now.</a>             
          
	    </div>
        
   </div>

  <div class="span5 featuredResource">
	<p class="blogHeader">BLOG: ABOUT LEADS</p>
	
    <p>Our team of lead generation and online marketing experts regularly contribute to our About Leads blog.</p>
	<p>Stay up-to-date on the latest studies, tactics and tips in the world of online lead generation.</p>

<p class="blogButton"><a href="http://www.buyerzone.com/blog/" role="button" class="btn btn-large btn-custom4">Check out our blog</a></p>

    
      </div>
  </div>
			

</div><!-- end lowerpage containter -->

</div><!-- end lowerpage section -->
            
          
          <footer >
 <div class="container">
 <div class="row-fluid">
               
            	<ul> 
                  
                  <li><a href="[@generateExternalUrl '/about-us/'/]" title="About Us">About Us</a></li>
                    <li><a href="[@generateExternalUrl '/about-us/careers/'/]" title="Careers">Careers</a></li>
                    <li><a href="http://www.buyerzone.com/blog/">Blog</a></li>
                    <li><a href="[@generateExternalUrl '/about-us/privacy/'/]" title="Privacy Policy">Privacy Policy</a></li>
                    <li><a href="[@generateExternalUrl '/about-us/disclaimer/'/]" title="Terms and Conditions">Terms and Conditions</a></li>
                    <li><a href="[@generateExternalUrl '/sitemap/'/]" title="Site Map">Site Map</a></li>
                </ul>
				  <p class="address">BuyerZone | 225 Wyman Street Waltham, MA 02451 | (888) 393-5000 x4</p>      
                <p class="socialContainer "><div class="social-large">
                <ul class="socialSharing">
					<li class="twitter"><a href="https://twitter.com/#!/buyerzone">Twitter</a></li>
                    <li class="facebook"><a href="http://www.facebook.com/buyerzone">Facebook</a></li>
                    <li class="linkedIn"><a href="http://www.linkedin.com/company/buyerzone.com">LinkedIn</a></li>
                </ul>

		</div></p>
               <p> <ul class="bbbLogos">
            <li><a title="BuyerZone.com, LLC BBB Business Review" href="http://www.bbb.org/boston/business-reviews/administrative-services/buyerzone-com-llc-in-waltham-ma-87942/#bbbonlineclick"><img alt="BuyerZone.com, LLC BBB Business Review" style="border: 0;" src="http://seal-boston.bbb.org/seals/blue-seal-96-50-buyerzone-com-llc-87942.png" /></a></li>
            <li><a target="_blank" title="TRUSTe online privacy certification" href="//privacy.truste.com/privacy-seal/BuyerZone-com,-LLC/validation?rid=be8f9d2d-285d-44db-bd4b-ee60971c7f5b"><img src="//privacy-policy.truste.com/privacy-seal/BuyerZone-com,-LLC/seal?rid=298b050a-42dd-44fa-a5c8-5c7460ce5dbd" alt="TRUSTe online privacy certification" width="95" style="border: none"></a></li>
            </ul></p>
               
               
      		

</div> <!-- end footer uls -->
<p class="address">&copy; 2016, BuyerZone.com, LLC. A Purch Brand. All rights reserved.</p>
<p class="bzApp">(${BZ_APPLICATION_VERSION})</p>
</div> <!-- end footer container -->  


</footer>

		
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="/pages/leads/js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
        <script src="/pages/leads/js/vendor/bootstrap.min.js"></script>
       
        <script src="/pages/leads/js/main.js"></script>
        <script src="/pages/leads/js/marketo.js"></script>
        <script type="text/javascript">
			$("li.home").addClass("active");
		</script>


[#include "/includes/marketoTracking.ftl"]
[#include "/includes/siteStats.ftl"]  

</body>
</html>