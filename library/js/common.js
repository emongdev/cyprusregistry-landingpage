$(document).ready(function(){
		
	$('#nomineeShareHolder').click(function() {
		if($('#nomineeShareHolder').is(':checked')) { 
			$('.nominees-shareholder-input').prop('disabled', true);
			$('.nominees-shareholder-input').parents('.custom-checkbox').hide();
			$('.add-shareholder-btn').hide();			
			$('.shareholderName, .shareholderNationality, .shareholderOccupation, .shareholderAddress').prop('disabled', true);
		} else {
			$('.nominees-input').prop('disabled', false);
			$('.nominees-input').parents('.custom-checkbox').show();
			$('.add-shareholder-btn').show();
		}
	});
	
	$('#selectShareHolder').click(function() {
		if($('#selectShareHolder').is(':checked')) { 
			$('.nominees-shareholder-input').prop('disabled', false);
			$('.nominees-shareholder-input').parents('.custom-checkbox').show();
			$('.add-shareholder-btn').show();
			$('.shareholderName, .shareholderNationality, .shareholderOccupation, .shareholderAddress').prop('disabled', false);
		} else {
			$('.nominees-shareholder-input').prop('disabled', true);
			$('.nominees-shareholder-input').parents('.custom-checkbox').hide();
			$('.add-shareholder-btn').hide();
		}
	});

	$('#nomineeDirector').click(function() {
		if($('#nomineeDirector').is(':checked')) { 
			$('.nominees-director-input').prop('disabled', true);
			$('.nominees-director-input').parents('.custom-checkbox').hide();
			$('.add-director-btn').hide();
			$('.directorName, .directorNationality, .directorOccupation, .directorAddress').prop('disabled', true);
		} else {
			$('.nominees-director-input').prop('disabled', false);
			$('.nominees-director-input').parents('.custom-checkbox').show();
			$('.add-director-btn').show();
		}
	});
	
	$('#selectDirector').click(function() {
		if($('#selectDirector').is(':checked')) { 
			$('.nominees-director-input').prop('disabled', false);
			$('.nominees-director-input').parents('.custom-checkbox').show();
			$('.add-director-btn').show();
			$('.directorName, .directorNationality, .directorOccupation, .directorAddress').prop('disabled', false);
		} else {
			$('.nominees-director-input').prop('disabled', true);
			$('.nominees-director-input').parents('.custom-checkbox').hide();
			$('.add-director-btn').hide();
		}
	});
	
	
	var shareHolderStr = "";
	
	shareHolderStr += '<div class="shareholder-item col-sm-12 border pt-2 mb-3 position-relative parent-container">',
		shareHolderStr += '<span class="remove-item"><i class="fa fa-times" aria-hidden="true"></i></span>',
		shareHolderStr += '<div class="row">',
			shareHolderStr += '<div class="col-sm">',
				shareHolderStr += '<h6 class="item-shareholder-title">Shareholder <span>0</span></h6>',
			shareHolderStr += '</div>',
			shareHolderStr += '<div class="col-sm text-right">',
				shareHolderStr += '<div class="custom-control custom-checkbox my-1 mr-sm-2 shareholder-checkbox">',
					shareHolderStr += '<input type="checkbox" class="custom-control-input nominees-shareholder-input" id="customControlInline3">',
					shareHolderStr += '<label class="custom-control-label" for="customControlInline3">Nominee</label>',
				shareHolderStr += '</div>',
			shareHolderStr += '</div>',
		shareHolderStr += '</div>',
		shareHolderStr += '<div class="row">',
			shareHolderStr += '<div class="col-sm">',
			  shareHolderStr += '<div class="form-group">',
				shareHolderStr += '<label for="exampleInputPassword1">Name</label>',
				shareHolderStr += '<input type="text" class="form-control shareholderName" id="exampleInputPassword1" placeholder="Name">',
			  shareHolderStr += '</div>',
			shareHolderStr += '</div>',
			shareHolderStr += '<div class="col-sm">',
			  shareHolderStr += '<div class="form-group">',
				shareHolderStr += '<label for="exampleInputPassword1">Nationality</label>',
				shareHolderStr += '<input type="text" class="form-control shareholderNationality" id="exampleInputPassword1" placeholder="Nationality">',
			  shareHolderStr += '</div>',
			shareHolderStr += '</div>',
			shareHolderStr += '<div class="col-sm">',
			  shareHolderStr += '<div class="form-group">',
				shareHolderStr += '<label for="exampleInputPassword1">Occupation</label>',
				shareHolderStr += '<input type="text" class="form-control shareholderOccupation" id="exampleInputPassword1" placeholder="Occupation">',
			  shareHolderStr += '</div>',
			shareHolderStr += '</div>',
		shareHolderStr += '</div>',
		
		shareHolderStr += '<div class="row">',
			shareHolderStr += '<div class="col-sm">',
			  shareHolderStr += '<div class="form-group">',
				shareHolderStr += '<label for="exampleInputPassword1">Address</label>',
				shareHolderStr += '<input type="text" class="form-control shareholderAddress" id="exampleInputPassword1" placeholder="Address">',
			  shareHolderStr += '</div>',
			shareHolderStr += '</div>',
			shareHolderStr += '<div class="col-4">',
			  shareHolderStr += '<div class="form-group">',
				shareHolderStr += '<label for="exampleInputPassword1">Number of Shares</label>',
				shareHolderStr += '<input type="text" class="form-control shareholderNoShares" id="exampleInputPassword1" placeholder="No. of Shares">',
			  shareHolderStr += '</div>',
			shareHolderStr += '</div>',	
		shareHolderStr += '</div>',
	shareHolderStr += '</div>';
	
	
	var directorStr = "";
	
	directorStr += '<div class="directors-item col-sm-12 border pt-2 mb-3 position-relative parent-container">',
		directorStr += '<span class="remove-item"><i class="fa fa-times" aria-hidden="true"></i></span>',
		directorStr += '<div class="row">',
			directorStr += '<div class="col-sm">',
				directorStr += '<h6 class="item-director-title">Director <span>0</span></h6>',
			directorStr += '</div>',
			directorStr += '<div class="col-sm text-right">',
				directorStr += '<div class="custom-control custom-checkbox my-1 mr-sm-2 director-checkbox">',
					directorStr += '<input type="checkbox" class="custom-control-input nominees-shareholder-input" id="customControlInlineDirector3">',
					directorStr += '<label class="custom-control-label" for="customControlInlineDirector3">Nominee</label>',
				directorStr += '</div>',
			directorStr += '</div>',
		directorStr += '</div>',
		directorStr += '<div class="row">',
			directorStr += '<div class="col-sm">',
			  directorStr += '<div class="form-group">',
				directorStr += '<label for="exampleInputPassword1">Name</label>',
				directorStr += '<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name">',
			  directorStr += '</div>',
			directorStr += '</div>',
			directorStr += '<div class="col-sm">',
			  directorStr += '<div class="form-group">',
				directorStr += '<label for="exampleInputPassword1">Nationailty</label>',
				directorStr += '<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Nationality">',
			  directorStr += '</div>',
			directorStr += '</div>',
			directorStr += '<div class="col-sm">',
			  directorStr += '<div class="form-group">',
				directorStr += '<label for="exampleInputPassword1">Occupation</label>',
				directorStr += '<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Nationality">',
			  directorStr += '</div>',
			directorStr += '</div>',
		directorStr += '</div>',
		
		directorStr += '<div class="row">',
			directorStr += '<div class="col-sm">',
			  directorStr += '<div class="form-group">',
				directorStr += '<label for="exampleInputPassword1">Address</label>',
				directorStr += '<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address">',
			  directorStr += '</div>',
			directorStr += '</div>',	
		directorStr += '</div>',
	directorStr += '</div>';
	

	$('.add-shareholder-btn').click(function(){
		$('#shareholder-content').after(shareHolderStr);	
	
		/* Title Counter */
		$("h6.item-shareholder-title").each(function(i) {
			$(this).find("span").text(++i);
		});
		
		/* Nominees Counter */
		$(".shareholder-checkbox").each(function(i) {
			$(this).find("input").attr('id', 'customControlInline' + ++i);
		});
		
		$(".shareholder-checkbox").each(function(i) {
			$(this).find("label").attr('for', 'customControlInline' + ++i);
		});

		/* Hide add button when items are in maximum of 10*/	
		var itemCounter = $('.shareholder-item').length; 		
		if(itemCounter == 10){
			$(this).hide();
		}
		
	});
	
	
	$('.add-director-btn').click(function(){
		$('#directors-content').after(directorStr);	
		
		/* Title Counter */
		$("h6.item-director-title").each(function(i) {
			$(this).find("span").text(++i);
		});
		
		/* Nominees Counter */
		$(".director-checkbox").each(function(i) {
			$(this).find("input").attr('id', 'customControlInlineDirector' + ++i);
		});
		
		$(".director-checkbox").each(function(i) {
			$(this).find("label").attr('for', 'customControlInlineDirector' + ++i);
		});
		
		var itemCounter = $('.directors-item').length; 		
		if(itemCounter == 10){
			$(this).hide();
		}

	});

	/* Remove Item */
	$(document).on('click', '.remove-item', function(){
			$(this).parents('.parent-container').detach();

			$("h6.item-shareholder-title").each(function(i) {
				$(this).find("span").text(++i);
			});

			/* Nominees Counter */
			$(".shareholder-checkbox").each(function(i) {
				$(this).find("input").attr('id', 'customControlInline' + ++i);
			});
			
			$(".shareholder-checkbox").each(function(i) {
				$(this).find("label").attr('for', 'customControlInline' + ++i);
			});

			/* Nominees Counter */
			$(".director-checkbox").each(function(i) {
				$(this).find("input").attr('id', 'customControlInlineDirector' + ++i);
			});
			
			$(".director-checkbox").each(function(i) {
				$(this).find("label").attr('for', 'customControlInlineDirector' + ++i);
			});

			/* Show add button when items are lower than 10*/	
			var shareholderItemCounter = $('.shareholder-item').length; 		
			var directorItemCounter = $('.directors-item').length;

			if(shareholderItemCounter <= 9){
				$('.add-shareholder-btn').show();
			}

			if(directorItemCounter <= 9){
				$('.add-director-btn').show();
			}

	});
	
	
});