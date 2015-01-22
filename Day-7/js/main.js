"use strict";

var myNames = ["mike", "patrick", "chris", "alex"];

var car = {
	doors: 4,
	honk: function() {
		console.log("Honk Honk");
		return true;
	}
};

console.log(car);

$( document ).ready(function() {
  	// add listener to each button
	$('.btn').click(function(event) {
		// determine btn 
		switch(Number(event.target.id)) {
			case 1:
				// print 2nd name
				console.log(myNames[1]);
				break;
			case 2:
				// print nums 1-10
				for (var i = 1; i <= 10; i++) {
						console.log(i);
					};
				break;
			case 3: 
				// print all names
				for (var i=0; i < myNames.length; i++) {
						console.log(myNames[i]);
					};
				break;
			case 4:
				// print names begining with 'p'
				for (var i=0; i < myNames.length; i++) {
					if (myNames[i].substring(0,1) === 'p') {
							console.log(myNames[i]);
						};
					};
				break;
			case 5:
				car.honk();
				break;
		}; // switch

	}); // click listener

});// doc ready

