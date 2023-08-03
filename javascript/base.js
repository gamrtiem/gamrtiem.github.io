
	let z = (window.innerHeight/16 ) + "px";
	let y = (window.innerHeight * .15) + "px";
	var r = document.querySelector(':root');
	r.style.setProperty('--waveTop', z);
	r.style.setProperty('--topHeightJS', y);

window.onresize = function () { 
	let z = (window.innerHeight/16 ) + "px";
	let y = (window.innerHeight * .15) + "px";
	var r = document.querySelector(':root');
	r.style.setProperty('--waveTop', z);
	r.style.setProperty('--topHeightJS', y);
}

homecheck = 0
aboutcheck = 0
gamblingcheck = 0
projectscheck = 0

// Build the expiration date string:
var expiration_date = new Date();
var cookie_string = '';
expiration_date.setFullYear(expiration_date.getFullYear() + 1);

////////////////////////////////
function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
		if (theCookies[i-1] == "about=1" || theCookies[i-1] == " about=1"){
			aboutcheck = 1
		}
		if (theCookies[i-1] == "home=1" || theCookies[i-1] == " home=1"){
			homecheck = 1
		}
		if (theCookies[i-1] == "gambling=1" || theCookies[i-1] == " gambling=1"){
			gamblingcheck = 1
		}
		if (theCookies[i-1] == "projects=1" || theCookies[i-1] == " projects=1"){
			projectscheck = 1
		}
		if (theCookies[i-1] == "change=1" || theCookies[i-1] == " change=1"){
			changecheck = 1
		}
		
		if (theCookies[i-1] == "all=1" || theCookies[i-1] == " all=1" || theCookies[i-1] == "  all=1"){
			allcheck = 1
		}
    }
    return aString;
}


function CheckFunction(){
if (aboutcheck == 1 && projectscheck == 1 && homecheck == 1 && gamblingcheck == 1 && changecheck == 1 ) {
	var r = document.querySelector(':root');
	r.style.setProperty('--RibbonSize', "50px"); 
	document.cookie = "all=1; path=/; expires=Thu, 14 Dec 2023 12:00:00 UTC;";
}
}