window.onload = function () {
	CheckFunction()
	let z = (window.innerHeight - 223) + "px";
	let y = (160) + "px";
	var r = document.querySelector(':root');
	r.style.setProperty('--blue', z);
	r.style.setProperty('--smallbox', y);
	document.getElementById('volume').innerHTML = "1.0"
	document.getElementById('time').innerHTML = "0.0/" + (Math.floor((document.getElementById('player').duration -document.getElementById('player').duration%.1)*1000))/1000
	document.getElementById('volumeA').innerHTML = "1.0"
	document.getElementById('timeA').innerHTML = "0.0/" + (Math.floor((document.getElementById('playerA').duration -document.getElementById('playerA').duration%.1)*1000))/1000
	document.getElementById('volumeB').innerHTML = "1.0"
	document.getElementById('timeB').innerHTML = "0.0/" + (Math.floor((document.getElementById('playerB').duration -document.getElementById('playerB').duration%.1)*1000))/1000
	document.getElementById('volumeC').innerHTML = "1.0"
	document.getElementById('timeC').innerHTML = "0.0/" + (Math.floor((document.getElementById('playerC').duration -document.getElementById('playerC').duration%.1)*1000))/1000
	document.getElementById('volumeD').innerHTML = "1.0"
	document.getElementById('timeD').innerHTML = "0.0/" + (Math.floor((document.getElementById('playerD').duration -document.getElementById('playerD').duration%.1)*1000))/1000
	document.getElementById('volumeE').innerHTML = "1.0"
	document.getElementById('timeE').innerHTML = "0.0/" + (Math.floor((document.getElementById('playerE').duration -document.getElementById('playerE').duration%.1)*1000))/1000
	document.getElementById('volumeF').innerHTML = "1.0"
	document.getElementById('timeF').innerHTML = "0.0/" + (Math.floor((document.getElementById('playerF').duration -document.getElementById('playerF').duration%.1)*1000))/1000
	document.getElementById('volumeG').innerHTML = "1.0"
	document.getElementById('timeG').innerHTML = "0.0/" + (Math.floor((document.getElementById('playerG').duration -document.getElementById('playerG').duration%.1)*1000))/1000
	document.getElementById('volumeH').innerHTML = "1.0"
	document.getElementById('timeH').innerHTML = "0.0/" + (Math.floor((document.getElementById('playerH').duration -document.getElementById('playerH').duration%.1)*1000))/1000
	loop = 0
	check = 1
	loopA = 0
	checkA = 1
	loopB = 0
	checkB = 1
	loopC = 0
	checkC = 1
	loopD = 0
	checkD = 1
	loopE = 0
	checkE = 1
	loopF = 0
	checkF = 1
	loopG = 0
	checkG = 1
	loopH = 0
	checkH = 1
	
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




///////////////////////////////////////////////////////////////////////////
// barrier for stupid stuff                                              //
///////////////////////////////////////////////////////////////////////////


function VolumeUpFunctionA() {
	document.getElementById('playerA').volume = ((Math.floor((document.getElementById('playerA').volume + 0.1)*1000))/1000).toFixed(2);
	document.getElementById('volumeA').innerHTML = document.getElementById('playerA').volume;
	if (document.getElementById('volumeA').innerHTML == 1){
		document.getElementById('volumeA').innerHTML = "1.0"
	}
}
function VolumeDownFunctionA() {
	document.getElementById('playerA').volume = ((Math.floor((document.getElementById('playerA').volume - 0.1)*1000))/1000).toFixed(2); 
	
	document.getElementById('volumeA').innerHTML = document.getElementById('playerA').volume;
}

function PauseFunctionA() {
	document.getElementById('playerA').pause();
	document.getElementById('timeA').innerHTML = (document.getElementById('playerA').currentTime - document.getElementById('playerA').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerA').duration -document.getElementById('playerA').duration%.1)*1000))/1000;
}






y.b = 42;




async function slowedCodeA() {
    document.getElementById('timeA').innerHTML = ((Math.floor((document.getElementById('playerA').currentTime -document.getElementById('playerA').currentTime%.1)*1000))/1000).toFixed(1) + "/" + (Math.floor((document.getElementById('playerA').duration -document.getElementById('playerA').duration%.1)*1000))/1000
	
	
	if (loopA == 1){
		if((((Math.floor((document.getElementById('playerA').currentTime -document.getElementById('playerA').currentTime%.1)*1000))/1000).toFixed(1)) == (Math.floor((document.getElementById('playerA').duration -document.getElementById('playerA').duration%.1)*1000))/1000){
			document.getElementById('playerA').currentTime = 0.0;
			document.getElementById('playerA').play();
		}
	}
	
    await this.timeout(100) // Wait random amount of time between [0.5, 2.5] seconds
    y.b = (Math.floor((document.getElementById('playerA').currentTime -document.getElementById('playerA').currentTime%.1)*1000))/1000

}



function PlayFunctionA() {
y = {
  bInternal: 10,
  bListener: function(val) {},
  set b(val) {
    this.bInternal = val;
    this.bListener(val);
  },
  get b() {
    return this.bInternal;
  },
  registerListener: function(listener) {
    this.bListener = listener;
  }
}
y.registerListener(function(val) {
  document.getElementById('timeA').innerHTML = ((Math.floor((document.getElementById('playerA').currentTime -document.getElementById('playerA').currentTime%.1)*1000))/1000).toFixed(1);
;
  slowedCodeA()

});
	document.getElementById('playerA').play();
	document.getElementById('timeA').innerHTML = (document.getElementById('playerA').currentTime - document.getElementById('playerA').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerA').duration -document.getElementById('playerA').duration%.1)*1000))/1000;;
	y.b = document.getElementById('playerA').currentTime - document.getElementById('playerA').currentTime%.1;
}
/////////////////////////////////////////////////////////////////////////////






function VolumeUpFunctionB() {
	document.getElementById('playerB').volume = ((Math.floor((document.getElementById('playerB').volume + 0.1)*1000))/1000).toFixed(2);
	document.getElementById('volumeB').innerHTML = document.getElementById('playerB').volume;
	if (document.getElementById('volumeB').innerHTML == 1){
		document.getElementById('volumeB').innerHTML = "1.0"
	}
}
function VolumeDownFunctionB() {
	document.getElementById('playerB').volume = ((Math.floor((document.getElementById('playerB').volume - 0.1)*1000))/1000).toFixed(2); 
	
	document.getElementById('volumeB').innerHTML = document.getElementById('playerB').volume;
}

function PauseFunctionB() {
	document.getElementById('playerB').pause();
	document.getElementById('timeB').innerHTML = (document.getElementById('playerB').currentTime - document.getElementById('playerB').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerB').duration -document.getElementById('playerB').duration%.1)*1000))/1000;
}






b.b = 42;




async function slowedCodeB() {
    document.getElementById('timeB').innerHTML = ((Math.floor((document.getElementById('playerB').currentTime -document.getElementById('playerB').currentTime%.1)*1000))/1000).toFixed(1) + "/" + (Math.floor((document.getElementById('playerB').duration -document.getElementById('playerB').duration%.1)*1000))/1000

	if (loopB == 1){
		if((((Math.floor((document.getElementById('playerB').currentTime -document.getElementById('playerB').currentTime%.1)*1000))/1000).toFixed(1)) == (Math.floor((document.getElementById('playerB').duration -document.getElementById('playerB').duration%.1)*1000))/1000){
			document.getElementById('playerB').currentTime = 0.0;
			document.getElementById('playerB').play();
		}
	}
    await this.timeout(100) // Wait random amount of time between [0.5, 2.5] seconds
    b.b = (Math.floor((document.getElementById('playerB').currentTime -document.getElementById('playerB').currentTime%.1)*1000))/1000

}



function PlayFunctionB() {
b = {
  bInternal: 10,
  bListener: function(val) {},
  set b(val) {
    this.bInternal = val;
    this.bListener(val);
  },
  get b() {
    return this.bInternal;
  },
  registerListener: function(listener) {
    this.bListener = listener;
  }
}
b.registerListener(function(val) {
  document.getElementById('timeB').innerHTML = ((Math.floor((document.getElementById('playerB').currentTime -document.getElementById('playerB').currentTime%.1)*1000))/1000).toFixed(1);
;
  slowedCodeB()

});
	document.getElementById('playerB').play();
	document.getElementById('timeB').innerHTML = (document.getElementById('playerB').currentTime - document.getElementById('playerB').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerB').duration -document.getElementById('playerB').duration%.1)*1000))/1000;;
	b.b = document.getElementById('playerB').currentTime - document.getElementById('playerB').currentTime%.1;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function VolumeUpFunctionC() {
	document.getElementById('playerC').volume = ((Math.floor((document.getElementById('playerC').volume + 0.1)*1000))/1000).toFixed(2);
	document.getElementById('volumeC').innerHTML = document.getElementById('playerC').volume;
	if (document.getElementById('volumeC').innerHTML == 1){
		document.getElementById('volumeC').innerHTML = "1.0"
	}
}
function VolumeDownFunctionC() {
	document.getElementById('playerC').volume = ((Math.floor((document.getElementById('playerC').volume - 0.1)*1000))/1000).toFixed(2); 
	
	document.getElementById('volumeC').innerHTML = document.getElementById('playerC').volume;
}

function PauseFunctionC() {
	document.getElementById('playerC').pause();
	document.getElementById('timeC').innerHTML = (document.getElementById('playerC').currentTime - document.getElementById('playerC').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerC').duration -document.getElementById('playerC').duration%.1)*1000))/1000;
}






c.b = 42;




async function slowedCodeC() {
    document.getElementById('timeC').innerHTML = ((Math.floor((document.getElementById('playerC').currentTime -document.getElementById('playerC').currentTime%.1)*1000))/1000).toFixed(1) + "/" + (Math.floor((document.getElementById('playerC').duration -document.getElementById('playerC').duration%.1)*1000))/1000
	
	if (loopC == 1){
		if((((Math.floor((document.getElementById('playerC').currentTime -document.getElementById('playerC').currentTime%.1)*1000))/1000).toFixed(1)) == (Math.floor((document.getElementById('playerC').duration -document.getElementById('playerC').duration%.1)*1000))/1000){
			document.getElementById('playerC').currentTime = 0.0;
			document.getElementById('playerC').play();
		}
	}
    await this.timeout(100) // Wait random amount of time between [0.5, 2.5] seconds
    c.b = (Math.floor((document.getElementById('playerC').currentTime -document.getElementById('playerC').currentTime%.1)*1000))/1000

}



function PlayFunctionC() {
c = {
  bInternal: 10,
  bListener: function(val) {},
  set b(val) {
    this.bInternal = val;
    this.bListener(val);
  },
  get b() {
    return this.bInternal;
  },
  registerListener: function(listener) {
    this.bListener = listener;
  }
}
c.registerListener(function(val) {
  document.getElementById('timeC').innerHTML = ((Math.floor((document.getElementById('playerC').currentTime -document.getElementById('playerC').currentTime%.1)*1000))/1000).toFixed(1);
;
  slowedCodeC()

});
	document.getElementById('playerC').play();
	document.getElementById('timeC').innerHTML = (document.getElementById('playerC').currentTime - document.getElementById('playerC').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerC').duration -document.getElementById('playerC').duration%.1)*1000))/1000;;
	c.b = document.getElementById('playerC').currentTime - document.getElementById('playerC').currentTime%.1;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function VolumeUpFunctionD() {
	document.getElementById('playerD').volume = ((Math.floor((document.getElementById('playerD').volume + 0.1)*1000))/1000).toFixed(2);
	document.getElementById('volumeD').innerHTML = document.getElementById('playerD').volume;
	if (document.getElementById('volumeD').innerHTML == 1){
		document.getElementById('volumeD').innerHTML = "1.0"
	}
}
function VolumeDownFunctionD() {
	document.getElementById('playerD').volume = ((Math.floor((document.getElementById('playerD').volume - 0.1)*1000))/1000).toFixed(2); 
	
	document.getElementById('volumeD').innerHTML = document.getElementById('playerD').volume;
}

function PauseFunctionD() {
	document.getElementById('playerD').pause();
	document.getElementById('timeD').innerHTML = (document.getElementById('playerD').currentTime - document.getElementById('playerD').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerD').duration -document.getElementById('playerD').duration%.1)*1000))/1000;
}






D.b = 42;




async function slowedCodeD() {
    document.getElementById('timeD').innerHTML = ((Math.floor((document.getElementById('playerD').currentTime -document.getElementById('playerD').currentTime%.1)*1000))/1000).toFixed(1) + "/" + (Math.floor((document.getElementById('playerD').duration -document.getElementById('playerD').duration%.1)*1000))/1000

	if (loopD == 1){
		if((((Math.floor((document.getElementById('playerD').currentTime -document.getElementById('playerD').currentTime%.1)*1000))/1000).toFixed(1)) == (Math.floor((document.getElementById('playerD').duration -document.getElementById('playerD').duration%.1)*1000))/1000){
			document.getElementById('playerD').currentTime = 0.0;
			document.getElementById('playerD').play();
		}
	}
    await this.timeout(100) // Wait random amount of time between [0.5, 2.5] seconds
    D.b = (Math.floor((document.getElementById('playerD').currentTime -document.getElementById('playerD').currentTime%.1)*1000))/1000

}



function PlayFunctionD() {
D = {
  bInternal: 10,
  bListener: function(val) {},
  set b(val) {
    this.bInternal = val;
    this.bListener(val);
  },
  get b() {
    return this.bInternal;
  },
  registerListener: function(listener) {
    this.bListener = listener;
  }
}
D.registerListener(function(val) {
  document.getElementById('timeD').innerHTML = ((Math.floor((document.getElementById('playerD').currentTime -document.getElementById('playerD').currentTime%.1)*1000))/1000).toFixed(1);
;
  slowedCodeD()

});
	document.getElementById('playerD').play();
	document.getElementById('timeD').innerHTML = (document.getElementById('playerD').currentTime - document.getElementById('playerD').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerD').duration -document.getElementById('playerD').duration%.1)*1000))/1000;;
	D.b = document.getElementById('playerD').currentTime - document.getElementById('playerC').currentTime%.1;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function VolumeUpFunctionE() {
	document.getElementById('playerE').volume = ((Math.floor((document.getElementById('playerE').volume + 0.1)*1000))/1000).toFixed(2);
	document.getElementById('volumeE').innerHTML = document.getElementById('playerE').volume;
	if (document.getElementById('volumeE').innerHTML == 1){
		document.getElementById('volumeE').innerHTML = "1.0"
	}
}
function VolumeDownFunctionE() {
	document.getElementById('playerE').volume = ((Math.floor((document.getElementById('playerE').volume - 0.1)*1000))/1000).toFixed(2); 
	
	document.getElementById('volumeE').innerHTML = document.getElementById('playerE').volume;
}

function PauseFunctionE() {
	document.getElementById('playerE').pause();
	document.getElementById('timeE').innerHTML = (document.getElementById('playerE').currentTime - document.getElementById('playerE').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerE').duration -document.getElementById('playerE').duration%.1)*1000))/1000;
}






E.b = 42;




async function slowedCodeE() {
    document.getElementById('timeE').innerHTML = ((Math.floor((document.getElementById('playerE').currentTime -document.getElementById('playerE').currentTime%.1)*1000))/1000).toFixed(1) + "/" + (Math.floor((document.getElementById('playerE').duration -document.getElementById('playerE').duration%.1)*1000))/1000


	if (loopE == 1){
		if((((Math.floor((document.getElementById('playerE').currentTime -document.getElementById('playerE').currentTime%.1)*1000))/1000).toFixed(1)) == (Math.floor((document.getElementById('playerE').duration -document.getElementById('playerE').duration%.1)*1000))/1000){
			document.getElementById('playerE').currentTime = 0.0;
			document.getElementById('playerE').play();
		}
	}
    await this.timeout(100) // Wait random amount of time between [0.5, 2.5] seconds
    E.b = (Math.floor((document.getElementById('playerE').currentTime -document.getElementById('playerE').currentTime%.1)*1000))/1000

}



function PlayFunctionE() {
E = {
  bInternal: 10,
  bListener: function(val) {},
  set b(val) {
    this.bInternal = val;
    this.bListener(val);
  },
  get b() {
    return this.bInternal;
  },
  registerListener: function(listener) {
    this.bListener = listener;
  }
}
E.registerListener(function(val) {
  document.getElementById('timeE').innerHTML = ((Math.floor((document.getElementById('playerE').currentTime -document.getElementById('playerE').currentTime%.1)*1000))/1000).toFixed(1);
;
  slowedCodeE()

});
	document.getElementById('playerE').play();
	document.getElementById('timeE').innerHTML = (document.getElementById('playerE').currentTime - document.getElementById('playerE').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerE').duration -document.getElementById('playerE').duration%.1)*1000))/1000;;
	E.b = document.getElementById('playerE').currentTime - document.getElementById('playerC').currentTime%.1;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function VolumeUpFunctionF() {
	document.getElementById('playerF').volume = ((Math.floor((document.getElementById('playerF').volume + 0.1)*1000))/1000).toFixed(2);
	document.getElementById('volumeF').innerHTML = document.getElementById('playerF').volume;
	if (document.getElementById('volumeF').innerHTML == 1){
		document.getElementById('volumeF').innerHTML = "1.0"
	}
}
function VolumeDownFunctionF() {
	document.getElementById('playerF').volume = ((Math.floor((document.getElementById('playerF').volume - 0.1)*1000))/1000).toFixed(2); 
	
	document.getElementById('volumeF').innerHTML = document.getElementById('playerF').volume;
}

function PauseFunctionF() {
	document.getElementById('playerF').pause();
	document.getElementById('timeF').innerHTML = (document.getElementById('playerF').currentTime - document.getElementById('playerF').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerF').duration -document.getElementById('playerF').duration%.1)*1000))/1000;
}






F.b = 42;




async function slowedCodeF() {
    document.getElementById('timeF').innerHTML = ((Math.floor((document.getElementById('playerF').currentTime -document.getElementById('playerF').currentTime%.1)*1000))/1000).toFixed(1) + "/" + (Math.floor((document.getElementById('playerF').duration -document.getElementById('playerF').duration%.1)*1000))/1000

	if (loopF == 1){
		if((((Math.floor((document.getElementById('playerF').currentTime -document.getElementById('playerF').currentTime%.1)*1000))/1000).toFixed(1)) == (Math.floor((document.getElementById('playerF').duration -document.getElementById('playerF').duration%.1)*1000))/1000){
			document.getElementById('playerF').currentTime = 0.0;
			document.getElementById('playerF').play();
		}
	}
    await this.timeout(100) // Wait random amount of time between [0.5, 2.5] seconds
    F.b = (Math.floor((document.getElementById('playerF').currentTime -document.getElementById('playerF').currentTime%.1)*1000))/1000

}



function PlayFunctionF() {
F = {
  bInternal: 10,
  bListener: function(val) {},
  set b(val) {
    this.bInternal = val;
    this.bListener(val);
  },
  get b() {
    return this.bInternal;
  },
  registerListener: function(listener) {
    this.bListener = listener;
  }
}
F.registerListener(function(val) {
  document.getElementById('timeF').innerHTML = ((Math.floor((document.getElementById('playerF').currentTime -document.getElementById('playerF').currentTime%.1)*1000))/1000).toFixed(1);
;
  slowedCodeF()

});
	document.getElementById('playerF').play();
	document.getElementById('timeF').innerHTML = (document.getElementById('playerF').currentTime - document.getElementById('playerF').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerF').duration -document.getElementById('playerF').duration%.1)*1000))/1000;;
	F.b = document.getElementById('playerF').currentTime - document.getElementById('playerC').currentTime%.1;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function VolumeUpFunctionG() {
	document.getElementById('playerG').volume = ((Math.floor((document.getElementById('playerG').volume + 0.1)*1000))/1000).toFixed(2);
	document.getElementById('volumeG').innerHTML = document.getElementById('playerG').volume;
	if (document.getElementById('volumeG').innerHTML == 1){
		document.getElementById('volumeG').innerHTML = "1.0"
	}
}
function VolumeDownFunctionG() {
	document.getElementById('playerG').volume = ((Math.floor((document.getElementById('playerG').volume - 0.1)*1000))/1000).toFixed(2); 
	
	document.getElementById('volumeG').innerHTML = document.getElementById('playerG').volume;
}

function PauseFunctionG() {
	document.getElementById('playerG').pause();
	document.getElementById('timeG').innerHTML = (document.getElementById('playerG').currentTime - document.getElementById('playerG').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerG').duration -document.getElementById('playerG').duration%.1)*1000))/1000;
}






G.b = 42;




async function slowedCodeG() {
    document.getElementById('timeG').innerHTML = ((Math.floor((document.getElementById('playerG').currentTime -document.getElementById('playerG').currentTime%.1)*1000))/1000).toFixed(1) + "/" + (Math.floor((document.getElementById('playerG').duration -document.getElementById('playerG').duration%.1)*1000))/1000

	if (loopG == 1){
		if((((Math.floor((document.getElementById('playerG').currentTime -document.getElementById('playerG').currentTime%.1)*1000))/1000).toFixed(1)) == (Math.floor((document.getElementById('playerG').duration -document.getElementById('playerG').duration%.1)*1000))/1000){
			document.getElementById('playerG').currentTime = 0.0;
			document.getElementById('playerG').play();
		}
	}
    await this.timeout(100) // Wait random amount of time between [0.5, 2.5] seconds
    G.b = (Math.floor((document.getElementById('playerG').currentTime -document.getElementById('playerG').currentTime%.1)*1000))/1000

}



function PlayFunctionG() {
G = {
  bInternal: 10,
  bListener: function(val) {},
  set b(val) {
    this.bInternal = val;
    this.bListener(val);
  },
  get b() {
    return this.bInternal;
  },
  registerListener: function(listener) {
    this.bListener = listener;
  }
}
G.registerListener(function(val) {
  document.getElementById('timeG').innerHTML = ((Math.floor((document.getElementById('playerG').currentTime -document.getElementById('playerG').currentTime%.1)*1000))/1000).toFixed(1);
;
  slowedCodeG()

});
	document.getElementById('playerG').play();
	document.getElementById('timeG').innerHTML = (document.getElementById('playerG').currentTime - document.getElementById('playerG').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerG').duration -document.getElementById('playerG').duration%.1)*1000))/1000;;
	G.b = document.getElementById('playerG').currentTime - document.getElementById('playerC').currentTime%.1;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function VolumeUpFunctionH() {
	document.getElementById('playerH').volume = ((Math.floor((document.getElementById('playerH').volume + 0.1)*1000))/1000).toFixed(2);
	document.getElementById('volumeH').innerHTML = document.getElementById('playerH').volume;
	if (document.getElementById('volumeH').innerHTML == 1){
		document.getElementById('volumeH').innerHTML = "1.0"
	}
}
function VolumeDownFunctionH() {
	document.getElementById('playerH').volume = ((Math.floor((document.getElementById('playerH').volume - 0.1)*1000))/1000).toFixed(2); 
	
	document.getElementById('volumeH').innerHTML = document.getElementById('playerH').volume;
}

function PauseFunctionH() {
	document.getElementById('playerH').pause();
	document.getElementById('timeH').innerHTML = (document.getElementById('playerH').currentTime - document.getElementById('playerH').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerH').duration -document.getElementById('playerH').duration%.1)*1000))/1000;
}






H.b = 42;




async function slowedCodeH() {
    document.getElementById('timeH').innerHTML = ((Math.floor((document.getElementById('playerH').currentTime -document.getElementById('playerH').currentTime%.1)*1000))/1000).toFixed(1) + "/" + (Math.floor((document.getElementById('playerH').duration -document.getElementById('playerH').duration%.1)*1000))/1000

	if (loopH == 1){
		if((((Math.floor((document.getElementById('playerH').currentTime -document.getElementById('playerH').currentTime%.1)*1000))/1000).toFixed(1)) == (Math.floor((document.getElementById('playerH').duration -document.getElementById('playerH').duration%.1)*1000))/1000){
			document.getElementById('playerH').currentTime = 0.0;
			document.getElementById('playerH').play();
		}
	}
    await this.timeout(100) // Wait random amount of time between [0.5, 2.5] seconds
    H.b = (Math.floor((document.getElementById('playerH').currentTime -document.getElementById('playerH').currentTime%.1)*1000))/1000

}



function PlayFunctionH() {
H = {
  bInternal: 10,
  bListener: function(val) {},
  set b(val) {
    this.bInternal = val;
    this.bListener(val);
  },
  get b() {
    return this.bInternal;
  },
  registerListener: function(listener) {
    this.bListener = listener;
  }
}
H.registerListener(function(val) {
  document.getElementById('timeH').innerHTML = ((Math.floor((document.getElementById('playerH').currentTime -document.getElementById('playerH').currentTime%.1)*1000))/1000).toFixed(1);
;
  slowedCodeH()

});
	document.getElementById('playerH').play();
	document.getElementById('timeH').innerHTML = (document.getElementById('playerH').currentTime - document.getElementById('playerH').currentTime%.1).toFixed(1) + "/" + (Math.floor((document.getElementById('playerH').duration -document.getElementById('playerH').duration%.1)*1000))/1000;
	H.b = document.getElementById('playerH').currentTime - document.getElementById('playerC').currentTime%.1;
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
function LoopFunctionA(){
	if (loopA == 0 & checkA == 1){
		loopA = 1
		checkA = 0
		document.getElementById('loopA').innerHTML = ""
		document.getElementById('loop2A').innerHTML = "looping"
	}
	if (loopA == 1 & checkA == 1){
		loopA = 0
		checkA = 0
		document.getElementById('loop2A').innerHTML = ""
		document.getElementById('loopA').innerHTML = "loop"
	}
	checkA = 1
}
function LoopFunctionB(){
	if (loopB == 0 & checkB == 1){
		loopB = 1
		checkB = 0
		document.getElementById('loopB').innerHTML = ""
		document.getElementById('loop2B').innerHTML = "looping"
	}
	if (loopB == 1 & checkB == 1){
		loopB = 0
		checkB = 0
		document.getElementById('loop2B').innerHTML = ""
		document.getElementById('loopB').innerHTML = "loop"
	}
	checkB = 1
}
function LoopFunctionC(){
	if (loopC == 0 & checkC == 1){
		loopC = 1
		checkC = 0
		document.getElementById('loopC').innerHTML = ""
		document.getElementById('loop2C').innerHTML = "looping"
	}
	if (loopC == 1 & checkC == 1){
		loopC = 0
		checkC = 0
		document.getElementById('loop2C').innerHTML = ""
		document.getElementById('loopC').innerHTML = "loop"
	}
	checkC = 1
}

function LoopFunctionD(){
	if (loopD == 0 & checkD == 1){
		loopD = 1
		checkD = 0
		document.getElementById('loopD').innerHTML = ""
		document.getElementById('loop2D').innerHTML = "looping"
	}
	if (loopD == 1 & checkD == 1){
		loopD = 0
		checkD = 0
		document.getElementById('loop2D').innerHTML = ""
		document.getElementById('loopD').innerHTML = "loop"
	}
	checkD = 1
}
function LoopFunctionE(){
	if (loopE == 0 & checkE == 1){
		loopE = 1
		checkE = 0
		document.getElementById('loopE').innerHTML = ""
		document.getElementById('loop2E').innerHTML = "looping"
	}
	if (loopE == 1 & checkE == 1){
		loopE = 0
		checkE = 0
		document.getElementById('loop2E').innerHTML = ""
		document.getElementById('loopE').innerHTML = "loop"
	}
	checkE = 1
}
function LoopFunctionF(){
	if (loopF == 0 & checkF == 1){
		loopF = 1
		checkF = 0
		document.getElementById('loopF').innerHTML = ""
		document.getElementById('loop2F').innerHTML = "looping"
	}
	if (loopF == 1 & checkF == 1){
		loopF = 0
		checkF = 0
		document.getElementById('loop2F').innerHTML = ""
		document.getElementById('loopF').innerHTML = "loop"
	}
	checkF = 1
}
function LoopFunctionG(){
	if (loopG == 0 & checkG == 1){
		loopG = 1
		checkG = 0
		document.getElementById('loopG').innerHTML = ""
		document.getElementById('loop2G').innerHTML = "looping"
	}
	if (loopG == 1 & checkG == 1){
		loopG = 0
		checkG = 0
		document.getElementById('loop2G').innerHTML = ""
		document.getElementById('loopG').innerHTML = "loop"
	}
	checkG = 1
}
function LoopFunctionH(){
	if (loopH == 0 & checkH == 1){
		loopH = 1
		checkH = 0
		document.getElementById('loopH').innerHTML = ""
		document.getElementById('loop2H').innerHTML = "looping"
	}
	if (loopH == 1 & checkH == 1){
		loopH = 0
		checkH = 0
		document.getElementById('loop2H').innerHTML = ""
		document.getElementById('loopH').innerHTML = "loop"
	}
	checkH = 1
}

function PlayAllFunction() {
	PlayFunction();
	PlayFunctionA();
	PlayFunctionB();
	PlayFunctionC();
	PlayFunctionD();
	PlayFunctionE();
	PlayFunctionF();
	PlayFunctionG();
	PlayFunctionH();
}
function LoopAllFunction() {
	LoopFunction();
	LoopFunctionA();
	LoopFunctionB();
	LoopFunctionC();
	LoopFunctionD();
	LoopFunctionE();
	LoopFunctionF();
	LoopFunctionG();
	LoopFunctionH();
}
function PauseAllFunction() {
	PauseFunction();
	PauseFunctionA();
	PauseFunctionB();
	PauseFunctionC();
	PauseFunctionD();
	PauseFunctionE();
	PauseFunctionF();
	PauseFunctionG();
	PauseFunctionH();
}
function TurnDownAllFunction() {
	VolumeDownFunction();
	VolumeDownFunctionA();
	VolumeDownFunctionB();
	VolumeDownFunctionC();
	VolumeDownFunctionD();
	VolumeDownFunctionE();
	VolumeDownFunctionF();
	VolumeDownFunctionG();
	VolumeDownFunctionH();
}
function TurnUpAllFunction() {
	VolumeUpFunction();
	VolumeUpFunctionA();
	VolumeUpFunctionB();
	VolumeUpFunctionC();
	VolumeUpFunctionD();
	VolumeUpFunctionE();
	VolumeUpFunctionF();
	VolumeUpFunctionG();
	VolumeUpFunctionH();
}