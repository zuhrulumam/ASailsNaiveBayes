
	$(document).ready(function(){
		$('#make').click(function(event){
			
			var data = $("#form1").serialize();
			$.ajax({
				url: '/user/naive/makeADecission', 
				type: 'POST', 
				data: data
			});
			event.preventDefault();
		});
	});

