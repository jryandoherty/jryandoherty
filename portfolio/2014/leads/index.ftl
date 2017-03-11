[#-- macros --]
	[#import "/spring.ftl" as spring /]
	[#include "/macro/GlobalMacros.ftl" /]
	[#include "/macro/BuyerZoneMacros.ftl" /]
	[#assign pageName = 'Lead Generation Programs']
	[#assign sampleLeadUrl = '/pages/sample/sampleSupplierLead.ftl']
	[#assign leadGenCatName = '']
	[#assign leadCat = '']
	[#assign leadSource = 'Inbound Reg Form']
	[#assign phone = '(888) 393-5000 (use ext. 4 for sales)']
	[#assign email = 'sales@buyerzone.com']



<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js ie9"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js"> <!--<![endif]-->
<head>
        <meta charset="utf-8">
        <meta name="description" content="BuyerZone, the leader in online B2B lead generation, delivers high quality sales leads with the ROI needed to help your business grow.">
        <meta name="viewport" content="width=device-width">

[#-- stylesheets  --]
     <!--[if lt IE 9]>[@processOnce '/scripts/libs/html5shiv.js'; fileUrl]<script type="text/javascript" src="${fileUrl}"></script>[/@]<![endif]-->
       	[@processOnce "/sass/css/seller.css"; fileUrl]<link rel="stylesheet" href="${fileUrl}"/>[/@]

[#-- page title --]
	
    <title>Prescreened B2B Sales Leads to Fill Your Sales Pipeline - BuyerZone</title>

[#-- canonical --]
	<link rel="canonical" href="http://www.buyerzone.com/leads/">

</head>

<body id="leadshome">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        

    [#-- header --]
    [#include "/includes/headerLeads.ftl"]
    
    [#-- main content --]
   
    <div class="primaryMessage">
    <div class="container">


 	[#-- marketo form --]
    <div id="formForMarketo">
			<div id="marketoForm" > [#include "/includes/marketoForm.ftl"] </div>
	</div><!-- end marketo section -->

        <div class="span5"><p>In-market B2B sales leads to fill every stage of your pipeline</p>
        <a href="/leads/contact/" role="button" class="btn btn-large btn-custom4 modalLinkMobile">GET STARTED</a> 
        </div>
        
        
        <div class="hero-unit" >
                <div class="watch">
                <a href="//fast.wistia.net/embed/iframe/jcgl4eckl5?popover=true" class="wistia-popover[height=394,playerColor=f49445,width=700]" onclick="s.tl(this,'e','WistiaPopover',null)"><img src="https://embed-ssl.wistia.com/deliveries/46aed72d221239da36909cf54a34e1b5363ee3a7.jpg?image_play_button=true&amp;image_play_button_color=f49445e0&amp;image_crop_resized=250x141" alt="" style="border:2px solid #464646" /></a>
               
              	<p class="secondaryHeader">See how we can help your business grow</p>  
				</div>                         
  		</div>
    
   
  </div><!-- end container -->     
</div><!-- end primary -->

        <div class="firstMessage">
            <div class="span10">
                <h2>THE LEADER IN ONLINE  B2B LEAD GENERATION</h2>
                <p>Generating new business doesn't need to be complicated or costly &mdash; you just need to work with the experts. BuyerZone lead generation programs provide you with the potential new customers you need to grow your business.</p>
            </div> 
        </div>

  
<div class="lowerPage">
  
  <div class="container">

    <div class="span10 secondMessage">
        <h2>Connecting in-market buyers + sellers is our passion. </h2>
        <p>We've generated millions of leads and have facilitated billions of dollars in B2B sales connections since 1999. Here's what sets us apart:</p>
        </div>
    
    
    <div class="row-fluid">
        
        <div class="span10 scale">          
            <a href="[@generateExternalUrl '/leads/lead-generation-programs/'/]"><h3>SCALE</h3></a>
            We generate nearly 50,000 quote requests across 100 product and service categories each month. With that many leads, you can worry less about finding in-market prospects to call and focus more on what you do best: sell.
            
        </div>
                    
    
        <div class="span10 qualityHome">        
            <a href="[@generateExternalUrl '/leads/lead-generation-programs/'/]"><h3>QUALITY</h3></a>
            We go to great lengths to ensure every lead we generate is legitimately considering your product or service. We collect a detailed list of purchasing requirements, obtain full contact information and screen for quality. 
                  
        </div>
        
        <div class="span10 flexibility">     
            <a href="[@generateExternalUrl '/leads/lead-generation-programs/'/]"><h3>FLEXIBILITY</h3></a>
            Customize your program to put yourself in the best position to close new business. Choose a program, define your sales territory, set a desired lead quantity, select from multiple lead delivery options and more – it's totally up to you.
                   
        </div>
        
        <div class="span10 roi">       
            <a href="[@generateExternalUrl '/leads/lead-generation-programs/'/]"><h3>RETURN ON MARKETING INVESTMENT</h3></a>
            It’s easy to track your success as you go. Our simple cost-per-lead (CPL) pricing model and 24/7 access to your online account ensure you know exactly how many leads you receive and how much you're making.
   
        </div>
    
     <div class="span4" >
    	<a href="/leads/lead-generation-programs/" role="button" class="btn btn-large btn-custom4" >LEARN MORE</a> 
    </div>   
    
    
</div>
 <div class="span10 logos">  
              <div class="logoText">BuyerZone is a trusted partner of these great brands and many more:</div>
                <div class="logoScreen">
                    <ul>
                        <li title="ADT, a BuyerZone Seller" class="partner-adt"></li>
                        <li title="Pitney Bowes, a BuyerZone Seller" class="partner-bobcat"></li>
                        <li title="Cisco, a BuyerZone Seller" class="partner-canon"></li>
                        <li title="Sharp, a BuyerZone Seller" class="partner-cisco"></li>
                        <li title="Vocalocity, a BuyerZone Seller" class="partner-sharp"></li>
                        <li title="Toyota, a BuyerZone Seller" class="partner-toyota"></li>
                    </ul>
                </div>
			

	</div>
</div>	

</div><!-- end lowerpage containter -->          
          
[#-- footer --]
    [#include "/includes/footerLeads.ftl"]

	[@processOnce '/dist/js/sellerPages.js'; fileUrl]<script type="text/javascript" src="${fileUrl}"></script>[/@]
	
        <script type="text/javascript">
			$("li.home").addClass("active");
			$('#FirstName').focus();
		</script>

 <script src="//fast.wistia.com/assets/external/popover-v1.js"></script>



[#include "/includes/marketoTracking.ftl"]
[#include "/includes/siteStats.ftl"]
</body>
</html>
