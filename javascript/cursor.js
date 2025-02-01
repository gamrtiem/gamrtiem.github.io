var r = document.querySelector(':root');

onmousemove = function(e) {
	let x = e.pageX + 1 + "px";
	let y = e.pageY + 1 + "px";

	xx = e.clientX - 35 + "px";
	yy = e.clientY - 60 + "px";
	//^is used for kabeewm.js but since you cant change onmousemove twice i had to shove it here



		if(!isNaN(e.pageX) && !isNaN(e.pageY)) {
			rainbow(x, y)
		}
}

rainbow = function (x, y) {
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
			setTimeout(mouse6, 400);

		}

		setTimeout(mouse5, 140);

		function mouse6() {
			if (r.style.getPropertyValue('--mouseposx4') === (r.style.getPropertyValue('--mouseposx'))) {
				x = "9999px";
				y = "9999px";
				r.style.setProperty('--mouseposy', y);
				r.style.setProperty('--mouseposx', x);
				r.style.setProperty('--mouseposy1', y);
				r.style.setProperty('--mouseposx1', x);
				r.style.setProperty('--mouseposy2', y);
				r.style.setProperty('--mouseposx2', x);
				r.style.setProperty('--mouseposy3', y);
				r.style.setProperty('--mouseposx3', x);
				r.style.setProperty('--mouseposy4', y);
				r.style.setProperty('--mouseposx4', x);
			}
		}

}


