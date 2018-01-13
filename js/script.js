$(function() {
	
	// Click the GO button
	$('#go').click(function(){
		
		// Build a function that checks to see if a car has won the race
		function checkIfComplete(){
			
			if( isComplete == false ) {
				isComplete = true;
			} else {
				place = 'second';
			}
			
		}
		
		// Get the width of the cars
		var carWidth = $('.car').width();
		
		// Get the width of the racetrack
		var raceTrackWidth = $(window).width() - carWidth;
		
		// Generate a random # between 2000 and 5000
		var raceTime1 = Math.floor( (Math.random() * 3000) + 2000 );
		var raceTime2 = Math.floor( (Math.random() * 3000) + 2000 );
		
		// Set a flag variable to FALSE by default
		var isComplete = false;
		
		// Set a flag variable to FIRST by default
		var place = "first";
		
		// Animate car 1
		$('#car1').animate({
			
			// Move the car width od the racetrack
			left: raceTrackWidth
			
		}, raceTime1, function(){
			
			// Animation is complete
			
			// Run a function
			checkIfComplete();
			
			// Give some text feedback in the race info box
			$('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );
			
		});
		
		// Animate car 2
		$('#car2').animate({
			
			// Move the car width od the racetrack
			left: raceTrackWidth
			
		}, raceTime2, function(){
			
			// Animation is complete
			
			// Run a function
			checkIfComplete();
			
			// Give some text feedback in the race info box
			$('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );
			
		});
		
	});
	
	// Reset the race
	$('#reset').click(function(){
		$('.car').css('left','0');
		$('.raceInfo span').text('');
	});
	
});