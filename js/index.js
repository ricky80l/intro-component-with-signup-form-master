// ANIMATIONS PART

$(".try").click(function() {
    $(".try").addClass("press_try");
    setTimeout(function() {
        $(".try").removeClass("press_try");
    }, 100);
});

$(".claim").click(function() {
    $(".claim").addClass("press_claim");
    setTimeout(function() {
        $(".claim").removeClass("press_claim");
    }, 100);
});

// CHECK PART

var include = false;
var ordered = false;
var spaceVal = false;
var emailCheckedVal = false;
var email = "";

$(".claim").click(function() {
    var nome = $(".name").val();
    var surname = $(".surname").val();
    email = $(".email").val();
    var password = $(".password").val();
    check(nome, surname, email, password);
});

function check(nome, surname, email, password) {
    emailChecked();
    if (nome != "" && surname != "" && email != "" && password != "" && ordered == true && include == true) {
        $(".check").css("visibility", "visible");
        setTimeout(function() {
            window.location.reload();
        }, 2000);
    } else {
        if (nome == "") {
            $(".label_name").text("First Name cannot be empty");
            $(".error_name").css("visibility", "visible");
            $(".name").addClass("border_red");
        } else {
            $(".check_name").css("visibility", "visible");
        }
        if (surname == "") {
            $(".label_surname").text("Last Name cannot be empty");
            $(".error_surname").css("visibility", "visible");
            $(".surname").addClass("border_red");
        } else {
            $(".check_surname").css("visibility", "visible");
        }
        if (emailCheckedVal == false) {
            $(".label_email").text("Look like this is not an email");
            $(".error_email").css("visibility", "visible");
            $(".email").addClass("border_red");
            $(".email").val("email@exemple/com");
        } else {
            $(".check_email").css("visibility", "visible");
        }
        if (password == "") {
            $(".label_pass").text("Password cannot be empty");
            $(".error_pass").css("visibility", "visible");
            $(".password").addClass("border_red");
        } else {
            $(".check_pass").css("visibility", "visible");
        }
    }
    setTimeout(function() {
        reset();
    }, 1500);
}

function emailChecked() {
    orderCheck();
    verEmail();
    if (email == "" || include == false || ordered == false || email == " ") {
        emailCheckedVal = false;
    } else {
        emailCheckedVal = true;
    }
};


function space() {
    if (email.includes(" ")) {
        spaceVal = false;
    } else {
        spaceVal = true;
    }
}

function verEmail() {
    email = $(".email").val();
    space();
    console.log(spaceVal);
    if (email.includes("@") && email.includes(".") && spaceVal == true) {
        include = true;
    } else {
        include = false;
    }
}

function orderCheck() {
    if (email.indexOf("@") < email.indexOf(".")) {
        ordered = true;
    } else {
        ordered = false;
    }
}



function reset() {
    $(".label_name").text("");
    $(".label_surname").text("");
    $(".label_email").text("");
    $(".label_pass").text("");
    $(".error").css("visibility", "hidden")
    $(".check").css("visibility", "hidden");
    $("input").removeClass("border_red");
    if (emailCheckedVal == false) {
        $(".email").val("");
    };
};