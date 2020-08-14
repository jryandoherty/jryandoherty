/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);

// Flow chart animation/ 

$(function(){

	var init, reset, drop,
		ladder = $('#dropLadder'),
		rungs = ladder.find('[data-drop-ladder]'),
		arrow = ladder.find('.arrow-container'),
		baseZ = 250 + rungs.length;

	drop = function(rungs) {
		rungs.each(function() {
			$(this).animate({
				left: $(this).data('drop-ladder-spacing') + '%'
			}, {
				easing: 'easeOutBack',
				duration: 1000 + Math.floor( (Math.random() * 1000) + 1)
			});
		});
		arrow.animate({width: arrow.data('drop-ladder-magnitude') + '%'}, 1500);
	};

	init = function() {
		rungs.sort(function(a, b){
			return $(a).data('drop-ladder') - $(b).data('drop-ladder');
		});
		rungs.each(function(idx) {
			$(this).css({
				'position': 'absolute',
				'left': 0,
				'z-index': baseZ - idx
			});
		});
		ladder.fadeIn();
		ladder.waypoint(function( direction ) {
			if (direction === 'down') {
				drop( rungs.filter(':gt(0)') );
			}
		}, { offset: '55%' });
	};

	init();
});



// animating 'molecule' of people
$(function(){

	$('#molecule').waypoint(function( direction ) {
		if (direction === 'down') {
			$('#molecule').stop().delay(250).animate({top:-260,right:-52}, 3000, 'easeInOutSine');
		// } else {
			// $('#molecule').stop().animate({top:-420,right:-200}, 5000, 'easeOutCirc');
		}
	}, { offset: '5%' });

});
	
	


// Smooth scroll/
	
	
	$(document).ready(function(){
	
			$('a').click(function(){
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 400);
			return false;
		});
		
});






// JavaScript Document///////////////////////////////////////////////////////////////////////////////////////
// SITESEARCH.JS
///////////////////////////////////////////////////////////////////////////////////////

/* jQuery hint plugin by Remy Sharp */
(function(c){c.fn.hint=function(b){b||(b="blur");return this.each(function(){function d(){a.val()==e&&a.hasClass(b)&&a.val("").removeClass(b)}var a=c(this),e=a.attr("title"),f=c(this.form),g=c(window);if(e){a.blur(function(){this.value===""&&a.val(e).addClass(b)}).focus(d).blur();f.submit(d);g.unload(d)}})}})(jQuery);

/*
	Check user entered text against searchKeywords.xml for keyword match, if match  
	is found, page is redirected to URL defined in xml file for the category that 
	contains the matched keyword.
*/
function parseSearchQuery(userText){
	var x = document.getElementById("keyword"),
		url = window.location.href,
		bzng = '';
	
	userText = userText.toLowerCase().replace(/[\/\\]/g, '');
	
	if(url.indexOf('bzng') >= 0){
		bzng = '/bzng';
	}
	
	// Open the category.xml file
	$.get(bzng+"/searchKeywords.xml", function(xml){
		var broadmatches = [];
		
		// Run the function for each category entry in the XML file
		$('category',xml).each(function(){
			var $this = $(this),
				catExactMatchKeywords = $this.find('exactMatchKeywords').text(),
				catBroadMatchKeywords = $this.find('broadMatchKeywords').text(),
				catUrl = $this.find('redirectPath').text(),
				curKeyword;
			
			// Check for Exact Match Keywords
			if (catExactMatchKeywords.length > 0) {
				var exactKeywords = $.map(catExactMatchKeywords.split(","), function(v){
						return $.trim(v.toLowerCase());
					}),
					index = $.inArray(userText, exactKeywords);
				
				if( index > -1 ){
					x.action = bzng + catUrl;
				}
			}
			
			// Check for Contains Match Keywords
			if (catBroadMatchKeywords.length > 0){
				var containsKeywords = catBroadMatchKeywords.split(",");
				
				for(var m=0, len=containsKeywords.length; m < len; m++) {
					curKeyword = $.trim(containsKeywords[m]).toLowerCase();
					
					if (curKeyword.indexOf(userText) > -1 && $.inArray(catUrl, broadmatches) === -1) {
						broadmatches.push( catUrl );
					}
				}
			}
		});
		
		if( broadmatches.length === 1 ){
			x.action = bzng + broadmatches[0];
		}
		if(window._gaq){ _gaq.push(['_trackEvent', "Homepage Search Redirect", x.action]); }	
		x.submit();
	});
}

// Google analytics event tracking for keyword search terms
//var trackSearchTerms=function(){
//	var action;
//	action = $("#searchBox").val();
//	if(window._gaq){ _gaq.push(['_trackEvent', "Homepage Search Terms", action]); }	
//}

// Google analytics event tracking for keyword search terms
var trackSearchTerms=function(){
	var action;
	action = $("#searchBox").val();
	if(window._gaq){ _gaq.push(['_trackEvent', "Homepage Search Terms", action]); }	
}


$(document).ready(function(){ 
	
	// autocomplete
	$('#searchBox').autocomplete({
		minLength: 2,
		source: window.keywordArray
	});
	
	// bind hint text to search input box
	$('input.searchBox').hint();
	
	// submit form
	$("#keyword").submit(function(event){
		event.preventDefault();
		trackSearchTerms();
		parseSearchQuery($.trim($("#searchBox").val()));
	});
	
	// pulldown menu
	$("#categoryList").bind("submit", function(event){
		event.preventDefault();
		window.location = $(this).find("select").attr("value");
	});
});


//Twitter Roll

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");





/*
     FILE ARCHIVED ON 15:56:01 Oct 05, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:53:46 Aug 06, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 27.139 (3)
  esindex: 0.005
  captures_list: 53.858
  CDXLines.iter: 14.311 (3)
  PetaboxLoader3.datanode: 32.427 (4)
  exclusion.robots: 0.128
  exclusion.robots.policy: 0.119
  RedisCDXSource: 8.63
  PetaboxLoader3.resolve: 39.988
  load_resource: 81.366
*/