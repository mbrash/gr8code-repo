'use strict';

$(document).ready(function() {

    // ---------------------------------------------------------------------------
    // HANDLE PLUGIN INIT
    // ---------------------------------------------------------------------------

    // rotate text in header
    $(".rotate").textrotator({
        animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 2000 // How many milliseconds until the next word show.
    });

    // customer product carousel
    $("#owl-example").owlCarousel({
        items: 3,
        autoPlay: true,
        stopOnHover: true
    });

    // wow js
    new WOW().init();

    // trigger count to on scroll
    var eventCalled = false;

    $(window).scroll(function (event) {
    	var scroll = $(window).scrollTop();
    	if (scroll > 560 && !eventCalled) {
    		eventCalled = true;
    		$('.timer').countTo();
    	}
	});

    // ---------------------------------------------------------------------------
    // HANDLE FORM VALIDATION, FORM HINTS, FORM SUBMIT 
    // ---------------------------------------------------------------------------

    // validate name
    function checkName(name) {
        if (name.length > 1) {
            return name;
        } else {
            $('#name').focus();
            $('form').append('<label class="wow shake">Please Enter Valid Name</label>');
            return false;
        }
    };

    // validate email
    function checkEmail(email) {
        var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (filter.test(email)) {
            return email;
        } else {
            $('#email').focus(); // set focus to field
            $('form').append('<label class="wow shake">Please Enter Valid E-mail</label>');
            return false;
        }
    };

    // validate text field 
    function checkTextField(textfield) {
    	// var filter =
        if (textfield.length > 3) {
            return textfield;
        } else {
            $('#textField').focus();
            $('form').append('<label class="wow shake">Please Enter Valid Message</label>');
            return false;
        }
    };

    // listen for submit button pressed 
    $('form').on('submit', function(event) {
        console.log("dsd")
        event.preventDefault(); // stop form changin page
        $('form label').remove(); // removal all labels

        // get form values
        var nameVal = $('#name').val(),
            emailVal = $('#email').val(),
            textFieldVal = $('#textField').val();

        // if form data valid
        if (checkName(nameVal) && 
        	checkEmail(emailVal) && 
        	checkTextField(textFieldVal)) {
            
            // get form action
            var url = $(this).attr("action"),
            	data = {
            			 "nameVal" : nameVal,
            			 "emailVal": emailVal,
            			 "textFieldVal": textFieldVal
            			}

            // post form
            $.post(url, data, function(){
				console.log("posted")
			})

            // show post received 
            $('form').append('<label class="wow fadeIn">Messaged Sent!</label>');

            // clear text from each input
            $('#name').val("");
            $('#email').val("");
            $('#textField').val("");
        }
    });

    // ---------------------------------------------------------------------------
});