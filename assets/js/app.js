
	$(document).ready(function(){
		$('#make').click(function(event){
			
			var data = $("#form1").serialize();
			$.ajax({
				url: '/user/naive/makeADecission', 
				type: 'POST', 
				data: data,
				success: function(result){
					$('#result').show();
					$('#result h2').html(result);
					$('#hasil').val(result) ;
					if(result != ""){
						$("#submit").html("<button type='submit' class='btn btn-primary btn-block'>Save Data</button>");
					}
				}
			});
			event.preventDefault();
		});
	});

