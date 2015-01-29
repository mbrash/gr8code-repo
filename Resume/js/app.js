'user strict'

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

    // number counter
    $('.timer').countTo();

    // wow js
    new WOW().init();

    // ---------------------------------------------------------------------------
    // HANDLE FORM VALIDATION, FORM HINTS, FORM SUBMIT 
    // ---------------------------------------------------------------------------

    // validate name
    function checkName(name) {
        if (name.length > 0) {
            return name;
        } else {
            $('#name').focus();
            $label = '<label class="wow shake">Please Enter Valid Name</label>'; // create html element
            $('form').append($label);
            return false;
        };
    };

    // validate email
    function checkEmail(email) {
        var testresults;
        var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (filter.test(email)) {
            return email;
        } else {
            $('#email').focus(); // set focus to field
            $label = '<label class="wow shake">Please Enter Valid E-mail</label>'; // create html element
            $('form').append($label);
            return false;
        };
    };

    // validate text field 
    function checkTextField(textfield) {
        if (textfield.length > 0) {
            return textfield;
        } else {
            $('#textField').focus();
            $label = '<label class="wow shake">Please Enter Valid Message</label>'; // create html element
            $('form').append($label);
            return false;
        };
    };

    // listen for submit button pressed 
    $('form').on('submit', function(event) {
        event.preventDefault();

        // removal all labels
        $('form label').remove();

        // get form values
        var nameVal = $('#name').val(),
            emailVal = $('#email').val(),
            textFieldVal = $('#textField').val();

        // submit 
        if (checkName(nameVal) && checkEmail(emailVal) && checkTextField(textFieldVal)) {
            // submit form
            $.ajax({
                type: "POST",
                url: $('form').attr('action'), // some php file
                data: {
                    "name": nameVal,
                    "email": emailVal,
                    "message": textFieldVal
                },
                dataType: 'json',
                success: function() {
                    console.log("post was succsesful");
                }
            });

            // alert user, and remove form
            $label = '<label class="wow fadeIn">Messaged Sent!</label>'; // create html element
            $('form').append($label);

            // clear text from each input
            $('#name').val("");
            $('#email').val("");
            $('#textField').val("");
        }
    });

    // ---------------------------------------------------------------------------
});