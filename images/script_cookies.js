homecheck = 0
aboutcheck = 0
gamblingcheck = 0
projectscheck = 0
allcheck = 0
// Build the expiration date string:
var expiration_date = new Date();
var cookie_string = '';
expiration_date.setFullYear(expiration_date.getFullYear() + 1);
// Build the set-cookie string:
cookie_string = "gambling=1; path=/; expires=Thu, 14 Dec 2023 12:00:00 UTC;";
// Create or update the cookie:
document.cookie = cookie_string;

////////////////////////////////
function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
		if (theCookies[i-1] == "about=1" || theCookies[i-1] == " about=1" || theCookies[i-1] == "  about=1"){
			aboutcheck = 1
		}
		if (theCookies[i-1] == "home=1" || theCookies[i-1] == " home=1" || theCookies[i-1] == "  home=1"){
			homecheck = 1
		}
		if (theCookies[i-1] == "gambling=1" || theCookies[i-1] == " gambling=1" || theCookies[i-1] == "  gambling=1"){
			gamblingcheck = 1
		}
		if (theCookies[i-1] == "projects=1" || theCookies[i-1] == " projects=1" || theCookies[i-1] == "  projects=1"){
			projectscheck = 1
		}
		if (theCookies[i-1] == "all=1" || theCookies[i-1] == " all=1" || theCookies[i-1] == "  all=1"){
			allcheck = 1
		}
    }
    return aString;
}
console.log("h");
console.log(document.cookie);
console.log(listCookies());
function CheckFunction(){
if (aboutcheck == 1 && projectscheck == 1 && homecheck == 1 && gamblingcheck == 1) {
	if(allcheck == 1){
		var r = document.querySelector(':root');
		r.style.setProperty('--RibbonSize', "50px"); 
	}else{
	document.getElementById('reward').innerHTML = "congrats! youve seen everything there is to this website! now head back home to claim your prize!!";
	}
}
}
ribbony = 1
ribbonx = 1
//ribbonclicks = 1
function RibbonFunction(){
	var r = document.querySelector(':root');
	console.log(document.getElementsByClassName('ribbon'));
	if(Math.random() <= .5){
		ribbonx = Math.random() * -1 * .5;
	} else{
		ribbonx = Math.random() * .5;
	}
	if(Math.random() <= .5){
		ribbony = Math.random() * -1 * .5;
	} else{
		ribbony = Math.random() * .5;
	}
	
	console.log(r.style.setProperty('--RibbonRandomX', ribbonx ));
	console.log(r.style.setProperty('--RibbonRandomY', ribbony ));
	
}
