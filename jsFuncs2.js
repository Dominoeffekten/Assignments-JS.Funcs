'use strict'; 

let roll1 = 0;
let roll2 = 0;
let roll3 = 0;
let roll4 = 0;
let roll5 = 0;
let roll6 = 0;
let flip;


function play() {
	

flip = Math.random();
flip = Math.floor( flip * 6 + 1 );
if ( flip === 1 )
    roll1++;
else if ( flip === 2 )
    roll2++;
else if ( flip === 3 )
    roll3++;
else if ( flip === 4 )
    roll4++;
else if ( flip === 5 )
    roll5++;
else 
    roll6++;
}


console.log(play());
