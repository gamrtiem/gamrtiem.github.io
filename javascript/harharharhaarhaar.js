function him(){
    document.querySelector(':root').style.setProperty('--harhar', "box"); 
}
function him2(){
    document.querySelector(':root').style.setProperty('--harhar', "none"); 
}
function hhim(){
    document.querySelector(':root').style.setProperty('--harhar2', "box"); 
}
function hhim2(){
    document.querySelector(':root').style.setProperty('--harhar2', "none"); 
}
function hhhim(){
    document.querySelector(':root').style.setProperty('--harhar3', "box"); 
}
function hhhim2(){
    document.querySelector(':root').style.setProperty('--harhar3', "none"); 
}
function interlap(){
    harhahrhar = false
    document.getElementById('harharharharhaarhaar').pause();
}

harhahrhar = false



const userOffset = new Date().getTimezoneOffset()*60*1000;
var currentdate = new Date();
console.log(currentdate.getHours() - 12);
console.log(currentdate.getMinutes());

onclick= function(e){
    let chance = Math.random();
    if (chance > 0.995 && harhahrhar == false || currentdate.getDay() == 0 && currentdate.getHours() - 12 == 4 && currentdate.getMinutes() > 0 && currentdate.getMinutes() < 15 ){ //
        document.getElementById('harharharharhaarhaar').play();
        document.getElementById('harharharharhaarhaar').volume = 0.3;
	    harhahrhar = true
        setTimeout(him, 2000);
        setTimeout(him2, 2200);
        setTimeout(hhim, 1000);
        setTimeout(hhim2, 1200);
        setTimeout(hhhim, 3000);
        setTimeout(hhhim2, 3300);
        setTimeout(interlap, 3580);
    }


}