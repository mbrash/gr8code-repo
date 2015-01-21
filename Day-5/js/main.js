// store name as var then print to console
var myName = "Michael";
console.log(myName + " is my name.");

// function print name 
function printName (name) {
	console.log("Hello " + name + ".");
}

printName(myName);

// change background of element
document.getElementById("copyright").style.background = "steelblue";

// event listener circle click
document.addEventListener("click", function(){
    alert("Don't touch my circle!");
});