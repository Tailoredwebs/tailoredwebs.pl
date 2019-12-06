(function($){
  $.fn.languageSwitcher = function(lang){
    $.each(this, function(index, value) {
      if (lang == $(value).attr("lang")) {
        $(value).css("display", "block")
        $(".showEN").css('display','block')
        $(".showPL").css('display','none')
        $("#flag-pl").css('color', '#27313e')
        $("#flag-en").css('color', 'red')
        // $('img[src*="poland"]').css("display", "block")
        // $('img[src*="kingdom"]').css("display", "none")

      } else {
        $(value).css("display", "none")
        $(".showEN").css('display','none')
        $(".showPL").css('display','block')
        $("#flag-en").css('color', '#27313e')
        $("#flag-pl").css('color', 'red')
        // $('img[src*="poland"]').css("display", "none")
        // $('img[src*="kingdom"]').css("display", "block")
      }
    });
    return this;
  }
}(jQuery));
