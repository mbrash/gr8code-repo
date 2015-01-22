// store name as var then print to console
var myName = "Michael";
console.log(myName + " is my name.");

// function print name 
function printName (name) {
	console.log("Hello " + name + ".");
}

printName(myName);


$( document ).ready(function() {
    console.log( "ready!" );

    $("#copyright").css("background-color", "steelblue");

    $('.circle').click(function() {
		alert("Don't touch my circle!");
    });

});