/**
 * Created by Mende Williams
 * Date: 10/26/11
 * jQuery Plugin -- append parameters from current document URL to elements w/ attributes that contain a URL path
 */


(function( $ ) {
    $.fn.passParams = function() {

        // define some variables that will be used in the scope of this function
        var args = arguments,
            doc_params_obj,
            loc = document.location,
            params,
            url_attr_list;

        // if the current document URL doesn't have a querystring, get out of here!
        if(!loc.search){
            return;
        }
        ;

        // get params string from current URL and deserialize into an object
        doc_params_obj = deserialize(loc.search.toString());

        // get for arguments to filter params that will be added to our urls, if none, all params will be added
        params = args.length ? filter_params(args) : doc_params_obj;

        // Initialize the tag_attributes object with some reasonable defaults.
        url_attr_list = {
            a: 'href',
            img: 'src',
            form: 'action',
            base: 'href',
            script: 'src',
            iframe: 'src',
            link: 'href'
        };

        // Get the default attribute for the specified DOM element, if it exists.
        function get_attr(ele) {
            var n = ele[0].nodeName;
            return n ? url_attr_list[ n.toLowerCase() ] : '';
        }
        ;

        // Deserialize a params string into an object
        function deserialize(params) {
            var p,
                key,
                val,
                obj = {},
                re = /\?/;

            params = params.replace(re, '').split('&');

            while (params.length) {

                p = params.shift().split('=');
                key = p[0];

                if (p.length === 2) {
                    val = p[1];

                    if ($.isArray(obj[key])) {
                        obj[key].push(val);
                    } else if (obj[key] !== undefined) {
                        obj[key] = [obj[key], val];
                    } else {
                        obj[key] = val;
                    }

                } else if (key) {
                    obj[key] = '';
                }
            }

            return obj;
        }
        ;

        // Filter document querystring based on any arguments passed to our passParams method
        function filter_params(args) {
            var k,
                len = args.length,
                filtered_params = {};

            for ( k = 0; k < len; k++ ) {
                filtered_params[args[k]] = doc_params_obj[args[k]];
            }
            return filtered_params;
        }
        ;

        // Merge a URL (with or without a pre-existing params string and/or #anchor,
        // or fragment) plus any object or params string into a new URL.
        function build_url(url, params) {
            var qs,
                sec = /^([^#?]*)[?]?([^#]*)(#?.*)/,
                matches = url.match(sec),
                url_params = matches[2] ? deserialize(matches[2]) : false,
                hash = matches[3] || '';

                if (url_params) {
                    qs = $.extend({}, url_params, params);
                } else {
                    qs = params;
                }

            qs = '?' + $.param(qs);
            return matches[1] + qs + hash;
        }
        ;
    
        // Test url for internalness
        function is_url_internal(url){
            var re = /^www\./,
                cur_host = loc.hostname.replace(re, ''),
                alt_hostname = '(?:www\\.)?',
                pattern = new RegExp(alt_hostname + cur_host);

                // non-navigating: url is nonexistent
                if (!url || !url.length) {
                    return false;
                }
                // if url is absolute (begins with http:// or https://), test domain against current url
                if (/^https?:\/\//i.test(url)) {
                    return pattern.test(url);
                }
                // non-navigating: url begins with # or scheme:
                if (/^(?:#|[a-z\d.-]+:)/i.test(url)) {
                    return false;
                }
                // if we got this far, link is relative path
                return true;
        }
        ;

        // start actual work here
        return this.each(function() {
            var cur_attr,
                ele = $(this),
                url;
            
            cur_attr = get_attr(ele);
            url = ele.attr(cur_attr);
            if(is_url_internal(url)) {
                ele.attr(cur_attr, build_url(url, params));
            }
        })
    };
})( jQuery );
/* ----------------------------------------------------------------------------
    ! this is the end of the plugin
---------------------------------------------------------------------------- */




/* ----------------------------------------------------------------------------
    call function when dom is ready
---------------------------------------------------------------------------- */
$(document).ready(function() {

    // remove parameter 'marketingId' to include all parameters from url on page links
    // use comma seperated list to add additional parameters to page links
    $('a').passParams('marketingId');
	$('iframe').passParams('marketingId');

})
