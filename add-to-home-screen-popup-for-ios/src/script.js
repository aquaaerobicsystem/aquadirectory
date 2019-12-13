try{Typekit.load();}catch(e){
}

$(function() {
  $('#popup').animate({'bottom': '-14%'}, 1000).animate({'bottom': '-4%'}, 75).animate({'bottom': '-14%'}, 75);
  $('.popup-close-icon').on('click', function(){
  	$('#popup').animate({'bottom': '1000px'}, 500, function() {
    	$(this).remove();
    });
  });
});