console.log( "ready!" );
let b = document.getElementById("behindstatus");
let h = document.getElementById("statuscafe");

    console.log(b)
    function outputsize() {
        const l = document.getElementById("statuscafe");
        if(l != null){
            var r = document.querySelector(':root');
            r.style.setProperty('--statusHeight', (l.offsetHeight + 5) + "px");

            console.log(l.style.height)
            console.log(l.style.width)
            console.log(l.style)
            console.log(l)
            console.log(l.offsetHeight)
        }
    }
    outputsize()

    console.log(h)
    new ResizeObserver(outputsize).observe(h)