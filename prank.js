$(document).ready(function(){
  	$('.container').on('click', '#button', function(e){
    	var source = $('.source').text();
		$('.source').text(source.replace(";", "\u037E"));
		print_info();
  	});
  	$('.container').on('change keyup paste', '.source', hide_info);
});

function print_info(){
	$('<div id="info" class="alert alert-success">Copy results and piss off the programmers!</div>').insertBefore('.source');
	$('#info').hide().fadeIn('2000');
}

function hide_info(){
    $('#info').slideUp('2000').delay(3000).remove();
}