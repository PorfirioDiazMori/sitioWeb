jQuery(document).ready(function(){

	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(500,function() {
		$('#message').hide();

		$.post(action, {
			Nombre: $('#name').val(),
			Email: $('#email').val(),
			Telefono: $('#phone').val(),
			Comentarios: $('#comments').val(),
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#submit').removeAttr('disabled');
				if(data.match('success') !== null) $('#contactform').slideUp('slow');

			}
		);

		});

		return false;

	});

});
