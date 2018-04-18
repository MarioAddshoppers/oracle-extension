/**
 * @fileoverview Blank Widget.
 *
 * @author Mario C.
 */
define(
  //-------------------------------------------------------------------
  // DEPENDENCIES
  //-------------------------------------------------------------------
   ["jquery", "knockout", "pubsub"],

  //-------------------------------------------------------------------
  // MODULE DEFINITION
  //-------------------------------------------------------------------
  function($, ko, pubsub) {

    "use strict";

    return {

      /**
       * Called on first loading of widget instance
       *
       * @param {Object} widget 
       */

        //WIDGET CODE
        beforeAppear: function(widget) {
            $.Topic(pubsub.topicNames.PRODUCT_VIEWED).subscribe(
              function(value){
              if (typeof asPubSubInjections === 'function') {
                asPubSubInjections();
                }
              }
            );
            //*****REPLACE WITH YOUR WIDGET ID
            var asAddShoppersID = "5a71f80be694aa68c77c4397";
            //only load on confirmation page
            if(document.URL.search("/confirmation/") > 0){
                window.AddShoppersConversion = new Object();
                window.AddShoppersConversion.order_id = this.confirmation().id;
                window.AddShoppersConversion.value = this.confirmation().priceInfo.total;
                // Bind events
                if (window.addEventListener) {      
                   window.addEventListener("load", AddShoppersWidget.track_conv(), false); 
                } else {
                   document.onreadystatechange = function() { 
                    if(document.readyState in {loaded: 1, complete: 1}) {
                  document.onreadystatechange = null; 
                        AddShoppersWidget.track_conv();
                    } 
                  }         
                } 
            }
            //load on all pages
          var js = document.createElement('script'); js.type = 'text/javascript'; js.async = true; js.id = 'AddShoppers';
          js.src = ('https:' == document.location.protocol ? 'https://shop.pe/widget/' : 'http://cdn.shop.pe/widget/') + 'widget_async.js#'+asAddShoppersID;
          document.getElementsByTagName("head")[0].appendChild(js);
        }
        
    };

  }
  
);
