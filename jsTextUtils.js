/*
Write three functions:

Write a function first(s), that returns the first character of the string s.
Write a function last(s), that returns the last character of the string s.
Write a function middle(s), that returns whatever is between the first and the last character of the string s.
Hint: Take a look a the string functions in your MDN reference.
*/

'use strict'; 
var s = prompt('Write something: ');

function first(s) {
	return s.charAt(s); //første bogstav
}

function last(s) {
	return s.charAt(s.length-1); //sidste bogstav
}

function middle(s) {
	return s.substring(1).slice(0, -1); //det i mellem
}

console.log(first(s), last(s), middle(s));
