let count = 500
let xx = '0px';
let yy = '0px';
function remove(counter) {
    document.getElementById('op' + counter).remove();
    document.getElementById('kabeewm' + counter).remove();
}

onclick = function (e) {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
		if (theCookies[i-1] == " kabeewm=1"){
			var sound = '<audio src="./sfx/snd_badexplosion.mp3" id="kabeewm' + count + '"></audio>';
            document.body.insertAdjacentHTML('beforeend', sound);
            document.getElementById('kabeewm' + count).play();
            document.getElementById('kabeewm' + count).volume = 0.1;

            var html = '<div id="op' + count + '" style="pointer-events: none; position: absolute; z-index: 99999; top: ' + yy + '; left: ' + xx + ';"><img src="./images/kabeewm !.gif?v=' + count + '"></div>';
            document.body.insertAdjacentHTML('beforeend', html);
            setTimeout(remove.bind(null, count), 2500);
            count++;
		} 
    }
    
}

function kabeewm(){
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
		if (theCookies[i-1] == " kabeewm=1"){
			cookie_string = "kabeewm=0; path=/; expires=Thu, 14 Dec 2023 12:00:00 UTC;";
            document.cookie = cookie_string;
            document.getElementById('kabeewmm').innerHTML = "kabeewm ?"
		} else {
            cookie_string = "kabeewm=1; path=/; expires=Thu, 14 Dec 2023 12:00:00 UTC;";
            document.cookie = cookie_string;
            document.getElementById('kabeewmm').innerHTML = "kabeewm !!!!"
        }
    }
}
/*
onclick = function (e) {
    var html = '<div id="op' + count + '" style="pointer-events: none; position: absolute; z-index: 999; top: ' + yy + '; left: ' + xx + ';"><img src="./images/kabeewm !.gif?v=' + count + '"></div>';
    document.body.insertAdjacentHTML('beforeend', html);
    setTimeout(remove.bind(null, count), 820);
    
    count++;
}
*/