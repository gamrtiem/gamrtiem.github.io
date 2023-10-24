window.onload = function () {
	CheckFunction()
	let z = (window.innerHeight - 223) + "px";
	let y = (160) + "px";
	var r = document.querySelector(':root');
	r.style.setProperty('--blue', z);
	r.style.setProperty('--smallbox', y);
	document.getElementById('player').play();
	document.getElementById('volume').innerHTML = "0.3"
	document.getElementById('player').volume = 0.3
	document.getElementById('time').innerHTML = "0.0/" + (Math.floor((document.getElementById('player').duration -document.getElementById('player').duration%.1)*1000))/1000
	loop = 0
	check = 1
}
function VolumeUpFunction() {
	document.getElementById('player').volume = ((Math.floor((document.getElementById('player').volume + 0.1)*1000))/1000).toFixed(2);
	document.getElementById('volume').innerHTML = document.getElementById('player').volume;
	if (document.getElementById('volume').innerHTML == 1){
		document.getElementById('volume').innerHTML = "1.0"
	}
}
function VolumeDownFunction() {
	document.getElementById('player').volume = ((Math.floor((document.getElementById('player').volume - 0.1)*1000))/1000).toFixed(2); 
	
	document.getElementById('volume').innerHTML = document.getElementById('player').volume;
}
function PlayFunction() {
	document.getElementById('player').play();
	document.getElementById('time').innerHTML = (document.getElementById('player').currentTime - document.getElementById('player').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('player').duration -document.getElementById('player').duration%.1)*1000))/1000;;
	x.a = document.getElementById('player').currentTime - document.getElementById('player').currentTime%.1;
}
function PauseFunction() {
	document.getElementById('player').pause();
	document.getElementById('time').innerHTML = (document.getElementById('player').currentTime - document.getElementById('player').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('player').duration -document.getElementById('player').duration%.1)*1000))/1000;
}



x = {
  aInternal: 10,
  aListener: function(val) {},
  set a(val) {
    this.aInternal = val;
    this.aListener(val);
  },
  get a() {
    return this.aInternal;
  },
  registerListener: function(listener) {
    this.aListener = listener;
  }
}

x.registerListener(function(val) {
  document.getElementById('time').innerHTML = ((Math.floor((document.getElementById('player').currentTime -document.getElementById('player').currentTime%.1)*1000))/1000).toFixed(1);
;
  slowedCode()

});

x.a = 42;

loop = 0;



function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function slowedCode() {
    document.getElementById('time').innerHTML = ((Math.floor((document.getElementById('player').currentTime -document.getElementById('player').currentTime%.1)*1000))/1000).toFixed(1) + "/" + (Math.floor((document.getElementById('player').duration -document.getElementById('player').duration%.1)*1000))/1000

	if (loop == 1){
		if((((Math.floor((document.getElementById('player').currentTime -document.getElementById('player').currentTime%.1)*1000))/1000).toFixed(1)) == (Math.floor((document.getElementById('player').duration -document.getElementById('player').duration%.1)*1000))/1000){
			document.getElementById('player').currentTime = 0.0;
			document.getElementById('player').play();
		}
	}
    await this.timeout(100) // Wait random amount of time between [0.5, 2.5] seconds
    x.a = (Math.floor((document.getElementById('player').currentTime -document.getElementById('player').currentTime%.1)*1000))/1000

}




function LoopFunction(){
	if (loop == 0 & check == 1){
		loop = 1
		check = 0
		document.getElementById('loop').innerHTML = ""
		document.getElementById('loop2').innerHTML = "looping"
	}
	if (loop == 1 & check == 1){
		loop = 0
		check = 0
		document.getElementById('loop2').innerHTML = ""
		document.getElementById('loop').innerHTML = "loop"
	}
	check = 1
}