'use strict'; 

function play(a){
	return Math.floor(Math.random()* a + 1);
	
}

var a = Number(prompt('Write how many sides there are: '));

console.log('The number you got is: ' + play(a));