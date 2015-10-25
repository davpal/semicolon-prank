$(document).ready(function(){
  	$('#container').on('click', '#button', function(e){
    	var source = $('#source').val();
		$('#source').val(source.replace(";", "\u037E"));
		print_info();
  	});
  	$('#container').on('change keyup paste', '#source', hide_info);
});

function print_info(){
	$('<h2 id="info">Copy results and piss off the programmers!</h2>').insertBefore('#source');
	$('#info').hide().fadeIn('2000');
}

function hide_info(){
    $('#info').slideUp('2000');
	sleep(3000);
	$('#info').remove();
}