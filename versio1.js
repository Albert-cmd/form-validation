//alert("versio1.js");

function formValidator(e) {
    // Make quick references to our fields
    // var firstname = document.getElementById('firstname');
    // var addr = document.getElementById('addr');
    // var zip = document.getElementById('zip');
    // var state = document.getElementById('state');
    // var username = document.getElementById('username');
    // var email = document.getElementById('email');

    var firstname = document.forms['formulari']['firstname'];
    var addr = document.forms['formulari']['addr'];
    var zip = document.forms['formulari']['zip'];
    var state = document.forms['formulari']['state'];
    var username = document.forms['formulari']['username'];
    var email = document.formulari.email;
    // Check each input in the order that it appears in the form!
    if (isAlphabet(firstname, "Please enter only letters for your name")) {

        if (isAlphanumeric(addr, "Numbers and Letters Only for Address")) {

            if (isNumeric(zip, "Please enter a valid zip code")) {

                if (madeSelection(state, "Please Choose a State")) {

                    if (lengthRestriction(username, 6, 8)) {

                        if (emailValidator(email, "Please enter a valid email address")) {
                            return true;
                        }
                        else {
                            managePriority('email');
                        }
                    }
                    else{
                        managePriority('username');
                    }
                }else{
                    managePriority('state')
                }
            }else{
                managePriority('zip');
            }
        }else{
            managePriority('addr');
        }
    }else{
        managePriority('firstname');
    }
    return false;
}

function notEmpty(elem, helperMsg) {
    if (elem.value.length == 0) {
       // alert(helperMsg);
        showAlertMessage(helperMsg,'');
        elem.focus(); // set the focus to this input
        return false;
    }
    return true;
}

function isNumeric(elem, helperMsg) {
    var numericExpression = /^[0-9]+$/;
    if (elem.value.match(numericExpression)) {
        return true;
    } else {
        //alert(helperMsg);
        showAlertMessage(helperMsg,'error-zip');
        //elem.focus();
        return false;
    }
}

function isAlphabet(elem, helperMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (elem.value.match(alphaExp)) {
        return true;
    } else {
        //alert(helperMsg);
        showAlertMessage(helperMsg,'error-firstname');
       // elem.focus();
        return false;
    }
}

function isAlphanumeric(elem, helperMsg) {
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if (elem.value.match(alphaExp)) {
        return true;
    } else {
        //alert(helperMsg);
        showAlertMessage(helperMsg,'error-adress');
      //  elem.focus();
        return false;
    }
}

function lengthRestriction(elem, min, max) {
    var uInput = elem.value;
    if (uInput.length >= min && uInput.length <= max) {
        return true;
    } else {
        //alert("Please enter between " + min + " and " + max + " characters");
        showAlertMessage("Please enter between " + min + " and " + max + " characters",'error-username');
        //elem.focus();
        return false;
    }
}

function madeSelection(elem, helperMsg) {
    if (elem.value == "Please Choose") {
        //alert(helperMsg);
        showAlertMessage(helperMsg,'error-state');
       // elem.focus();
        return false;
    } else {
        return true;
    }
}

function emailValidator(elem, helperMsg) {
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (elem.value.match(emailExp)) {
        return true;
    } else {
        //alert(helperMsg);
        showAlertMessage(helperMsg,'error-email');
       // elem.focus();
        return false;
    }
}

function showAlertMessage(msg,spanId){
    //1.- Modifiqueu l'HTML i el javascript de manera que, en comptes d'un "alert" s'utilitzi un element "span"
    // (o similar) al costat de cada camp per indicar l'error detectat.

    // limpiamos las advertencias anteriores.

  /*  let spans = document.getElementsByClassName('alert');
    spans.forEach(element => {
        element.style.visibility='hidden';
    });*/


    let elem = document.getElementById(spanId);
   //  document.getElementsByTagName('formulari');
    elem.innerHTML = msg;
    elem.style.color = 'red';
    elem.style.visibility = 'visible';
    }

    function managePriority (fnc){
        var elem = document.getElementsByName(fnc);
        elem = elem[0];
        // ponemos el foco en el componente que falla.
        switch (fnc) {
            case 'email':
                elem.focus();
                break;
            case 'username':
                elem.focus();
                break;
            case 'state':
                elem.focus();
                break;
            case 'zip':
                elem.focus();
                break;
            case 'addr':
                elem.focus();
                break;
            case 'firstname':
                elem.focus();
                break;
        }


    }
