jQuery(document).ready(function(){
    jQuery(".tab-title").click(function(){
           if (jQuery(this).hasClass("active")){
               jQuery(".tab-title").removeClass("active");
               jQuery(".tab-panel").slideUp("slow");
           }else {
               jQuery(".tab-title").removeClass("active");
               jQuery(this).addClass("active");
               jQuery(".tab-panel").slideUp("slow");
               jQuery(this).next().slideDown("slow");
           }
    });
});