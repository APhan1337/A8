'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // $('.project a').click(addProjectDetails);
    // $('#colorBtn').click(randomizeColors);


    $('form').submit((event) => {
        event.preventDefault();
        console.log("clicked, here is the event");

        var values = $('form').serializeArray();

        let pid = values[0].value;
        let password = values[1].value;

        console.log(pid);
        console.log(password);

        if (pid !== "A12345678" || password !== "CatsAreCool") {
            alert("Make sure PID is A12345678 and password is CatsAreCool");
            $('form').trigger('reset');
        } else {
            window.location.pathname = "/journey";
        }

    })

}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
        window.location.pathname = "/journey";
        FB.api('/me?fields=name,first_name', changeUser);
    }
}

function changeUser(response) {
    // $.post('/user/name', {
    //     name: response.name
    // })
}