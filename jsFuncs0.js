'use strict'; 
/*
Write three functions:

addVat(a), that returns amount including vat given an amount as input.
subVat(a), that returns amount excluding vat given an amount as input.
calcVat(a), that returns the vat from the given amount.
Use the Danish vat of 25.0%.

Hand in as a file called jsFuncs0.js
*/

var a = Number(prompt('Write the price '));

function addVat(a) {
    return a + (a * 0.25);
}

function subVat(a) {
    return a - (a * 0.25);
}

function calcVat(a) {
    return a * 0.25;
}

console.log(addVat(a), subVat(a), calcVat(a));

