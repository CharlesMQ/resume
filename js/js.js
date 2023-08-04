$(window).on('load', function () {
  $('#loader').delay(450).fadeOut('slow');
  $('body').delay(450).css({
      'overflow': 'visible'
  });
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-124638956-1');
  });