'use strict';

let square = document.querySelector('.square');


// let myShakeEvent = new Shake({
// 	// threshold: 15, // optional shake strength threshold
// 	// timeout: 1000 // optional, determines the frequency of event generation
// });

// myShakeEvent.start();

// window.addEventListener('shake', shakeEventDidOccur, false);

// //function to call when shake occurs
// function shakeEventDidOccur() {

// 	//put your own code here etc.
// 	alert('shake!');

// 	square.classList.add('square--active');


// }


function handleMotionEvent(event) {
	const x = event.accelerationIncludingGravity.x;
	const y = event.accelerationIncludingGravity.y;
	const z = event.accelerationIncludingGravity.z;

	// Do something awesome.

	square.classList.add('square--active');
}

window.addEventListener("devicemotion", handleMotionEvent, true);