<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>

$(document).ready(function() {
       
    $('.top .thema').click(function(){
	     	if($(this).hasClass('closed')) { 
	     		$(this).addClass('open').removeClass('closed'); 
	     		$(this).siblings('.inhalt').slideDown(200);
		 	} else {
		 		$(this).addClass('closed').removeClass('open');
		 		$(this).siblings('.inhalt').slideUp(200);
		 	} 
	     });
    
});
