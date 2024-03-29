$(document).ready(function(){
  $("a.newwindow").attr("target","_blank");
  $("a.topwindow").attr("target","_top");

  $('a[target="_blank"]').addClass("external-link");
  $('a[target="_top"]').addClass("external-link");

  $('.container').on('click', 'a:not(.external-link):not([href^="#"])', function(e){
     if (($(this).attr('rel') != 'lightbox') && ($(this).attr('href') != null)) {
      e.preventDefault();
      var url  = window.location.href;
      var newurl = $(this).attr('href');

      if (url.indexOf("chromeless:true") >= 0) {
          newurl = newurl + "/chromeless:true";
      }

      if (url.indexOf("embedded:true") >= 0) {
          newurl = newurl + "/embedded:true";
      }

      if (url.indexOf("hidepagetitle:true") >= 0) {
          newurl = newurl + "/hidepagetitle:true";
      }

      if (e.ctrlKey || e.metakey) {
        window.open(newurl,'_blank');
      } else {
        window.location.href = newurl;
      }

    }
  });
});
