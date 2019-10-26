(function($){
  $.fn.languageSwitcher = function(lang){
    $.each(this, function(index, value) {
      if (lang == $(value).attr("lang")) {
        $(value).css("display", "block");
        $('img[src*="poland"]').css("display", "inline")
        $('img[src*="kingdom"]').css("display", "none")

      } else {
        $(value).css("display", "none");
        $('img[src*="poland"]').css("display", "none")
        $('img[src*="kingdom"]').css("display", "inline")
      }
    });
    return this;
  }
}(jQuery));
