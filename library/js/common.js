$(document).ready(function(){
		
	$('#nomineeShareHolder').click(function() {
		if($('#nomineeShareHolder').is(':checked')) { 
			$('.nominees-shareholder-input').prop('disabled', true);
			$('.nominees-shareholder-input').parents('.custom-checkbox').hide();
			$('.add-shareholder-btn').prop('disabled', true);
		} else {
			$('.nominees-input').prop('disabled', false);
			$('.nominees-input').parents('.custom-checkbox').show();
			$('.add-shareholder-btn').prop('disabled', false);
		}
	});
	
	$('#selectShareHolder').click(function() {
		if($('#selectShareHolder').is(':checked')) { 
			$('.nominees-shareholder-input').prop('disabled', false);
			$('.nominees-shareholder-input').parents('.custom-checkbox').show();
			$('.add-shareholder-btn').prop('disabled', false);
		} else {
			$('.nominees-shareholder-input').prop('disabled', true);
			$('.nominees-shareholder-input').parents('.custom-checkbox').hide();
			$('.add-shareholder-btn').prop('disabled', true);
		}
	});

	$('#nomineeDirector').click(function() {
		if($('#nomineeDirector').is(':checked')) { 
			$('.nominees-director-input').prop('disabled', true);
			$('.nominees-director-input').parents('.custom-checkbox').hide();
			$('.add-director-btn').prop('disabled', true);
		} else {
			$('.nominees-director-input').prop('disabled', false);
			$('.nominees-director-input').parents('.custom-checkbox').show();
			$('.add-director-btn').prop('disabled', false);
		}
	});
	
	$('#selectDirector').click(function() {
		if($('#nomineeDirector').is(':checked')) { 
			$('.nominees-director-input').prop('disabled', true);
			$('.nominees-director-input').parents('.custom-checkbox').hide();
			$('.add-director-btn').prop('disabled', true);
		} else {
			$('.nominees-director-input').prop('disabled', false);
			$('.nominees-director-input').parents('.custom-checkbox').show();
			$('.add-director-btn').prop('disabled', false);
		}
	});
	
});