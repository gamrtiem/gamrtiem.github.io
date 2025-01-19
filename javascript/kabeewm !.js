let count = 0
let xx = '0px';
let yy = '0px';

var theCookies = document.cookie.split('=');
var kabeewmcheckifitsthereornot = document.cookie.split('=');
kabeewmcookieexists = true;
for (var i = 1; i <= theCookies.length; i++) {
	if (theCookies[i - 1] == "kabeewm" || theCookies[i - 1] == "1; kabeewm") {
		if (kabeewmcheckifitsthereornot[i] > 1) {
			console.log(theCookies[i] + " wowie !!! ");
			count = theCookies[i];
			kabeewmcookieexists = true;
		} 
	}
}

if(!kabeewmcookieexists){
	cookie_string = "kabeewm=0; path=/; expires=Thu, 14 Dec 2023 12:00:00 UTC;";
	document.cookie = cookie_string;
	console.log(kabeewmcookieexists + " icky bad creatngg kaboom cookie now !!");
}

console.log(count + " wowie !!! ");

function remove(counter) {
	document.getElementById('op' + counter).remove();
	document.getElementById('kabeewm' + counter).remove();
}

onclick = function (e) {
	var kabeewmcheckifitsthereornot = document.cookie.split('=');
	for (var i = 0; i <= kabeewmcheckifitsthereornot.length; i++) {
		if (kabeewmcheckifitsthereornot[i - 1] == "kabeewm" || kabeewmcheckifitsthereornot[i - 1] == "1; kabeewm" && kabeewmcheckifitsthereornot[i] > 0) {
			var sound = '<audio src="../sfx/snd_badexplosion.mp3" id="kabeewm' + count + '"></audio>';
			document.body.insertAdjacentHTML('beforeend', sound);
			document.getElementById('kabeewm' + count).play();
			document.getElementById('kabeewm' + count).volume = 0.1;

			var html = '<div id="op' + count + '" style="pointer-events: none; position: absolute; z-index: 99999; top: ' + yy + '; left: ' + xx + ';"><img src="../images/kabeewm !.gif?v=' + count + '"></div>';
			document.body.insertAdjacentHTML('beforeend', html);
			setTimeout(remove.bind(null, count), 2500);
			count++;


			console.log(count + " wowie !!! ");
			cookie_string = "kabeewm=" + count + "; path=/; expires=Thu, 14 Dec 2023 12:00:00 UTC;";
			document.cookie = cookie_string;
		}
	}

}



function kabeewm() {
	console.log("hertijenmrdtg")

	var kabeewmcheckifitsthereornot = document.cookie.split('=');
	for (var i = 0; i <= kabeewmcheckifitsthereornot.length; i++) {
		if (kabeewmcheckifitsthereornot[i - 1] === "kabeewm" || kabeewmcheckifitsthereornot[i - 1] === "1; kabeewm") {

			if (kabeewmcheckifitsthereornot[i] > 1) {
				cookie_string = "kabeewm=0; path=/; expires=Thu, 14 Dec 2023 12:00:00 UTC;";
				document.cookie = cookie_string;
				document.getElementById('kabeewmm').innerHTML = "kabeewm ?"
				console.log("dsiabling")
			} else if(kabeewmcheckifitsthereornot[i] === 0) {
				cookie_string = "kabeewm=" + count + 6 + "; path=/; expires=Thu, 14 Dec 2023 12:00:00 UTC;";
				//WHY DOES IT [[add six to the sum!]] HERE??? IT WOULDNT [[works great on sinks and dishes!]] OTHERWISE !!!!!!!!!!!!!!!!!!!!!
				document.cookie = cookie_string;
				document.getElementById('kabeewmm').innerHTML = "kabeewm !!!!"
				console.log("activatiing")

			}
		}
	}
}





onmousemove = function (e) {
	let x = e.clientX + 1 + "px";
	let y = e.clientY + 1 + "px";

	xx = e.clientX - 35 + "px";
	yy = e.clientY - 60 + "px";
	//^is used for kabeewm.js but since you cant change onmousemove twice i had to shove it here 
	var r = document.querySelector(':root');

	function mouse1() {
		r.style.setProperty('--mouseposy', y);
		r.style.setProperty('--mouseposx', x);
	}
	setTimeout(mouse1, 0);


	function mouse2() {
		r.style.setProperty('--mouseposy1', y);
		r.style.setProperty('--mouseposx1', x);
	}
	setTimeout(mouse2, 35);


	function mouse3() {
		r.style.setProperty('--mouseposy2', y);
		r.style.setProperty('--mouseposx2', x);
	}
	setTimeout(mouse3, 70);


	function mouse4() {
		r.style.setProperty('--mouseposy3', y);
		r.style.setProperty('--mouseposx3', x);
	}
	setTimeout(mouse4, 105);


	function mouse5() {
		r.style.setProperty('--mouseposy4', y);
		r.style.setProperty('--mouseposx4', x);
	}
	setTimeout(mouse5, 140);



	//console.log("mouse location:", x, y);
}