jQuery(document).ready(function ($) {
   var block = true;
   var page = 0;
   $(window).scroll(function () {
      if ($(window).height() + $(window).scrollTop() >= $(document).height() && block) {
         block = false;
         page++;
         $.ajax({
                type: 'GET',
                url: 'get.php?page=' + page,
                success: function (list) {
            stopLoading();
            if (list == '') {
               block = false;
            } else {
               $('.news').append(list);
               block = true;
            }
                }
            });
            startLoading();
        }
   });
   function startLoading() {
      $('.loading').fadeIn(300);
   }
   function stopLoading() {
      $('.loading').fadeOut();
   }
});