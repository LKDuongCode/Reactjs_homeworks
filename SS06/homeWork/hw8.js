"use strict";
let firstName = 'duong';
let lastName = 'le';
function checkUpper(str, str2) {
    if (str[0] !== str[0].toUpperCase()) {
        str = str.charAt(0).toUpperCase() + str.slice(1);
    }
    if (str2[0] !== str2[0].toUpperCase()) {
        str2 = str2.charAt(0).toUpperCase() + str2.slice(1);
    }
    let fullName = str + ' ' + str2;
    console.log(fullName);
}
checkUpper(firstName, lastName);
