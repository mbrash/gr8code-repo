var myNames = ["mike", "patrick", "chris", "alex"];

var car = {
	doors: 4,
	honk: function() {
		console.log("Honk Honk");
		return true;
	}
};

console.log(car);

// listener for button 1
document.getElementById("1").addEventListener('click', function() {
	console.log(myNames[1]);
});

// listener for button 2
document.getElementById("2").addEventListener('click', function() {
	for (var i = 1; i <= 10; i++) {
		console.log(i);
	};
});

// listener for button 3
document.getElementById("3").addEventListener('click', function() {
	for (var i=0; i < myNames.length; i++) {
		console.log(myNames[i]);
	};
});

// listener for button 4
document.getElementById("4").addEventListener('click', function() {
	for (var i=0; i < myNames.length; i++) {
			if (myNames[i].substring(0,1) === 'p') {
				console.log(myNames[i]);
			};
	};
});

// listener for button 5
document.getElementById("5").addEventListener('click', function() {
	car.honk();
});