$(document).ready(function() {
  $('#BS3').click(function() {
    $('link[href="css/main.css"]').attr('href','http://getbootstrap.com/docs/3.3/dist/css/bootstrap.min.css');
  });

  $('#BS4_layer').click(function() {
    $('link[href="http://getbootstrap.com/docs/3.3/dist/css/bootstrap.min.css"]').attr('href','css/main.css');
  });
});