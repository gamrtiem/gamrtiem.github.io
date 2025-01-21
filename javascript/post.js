let b = document.getElementById("behindstatus");
const h = document.getElementById("statuscafe");
console.log(b)
function outputsize() {
    const l = document.getElementById("statuscafe");

    var r = document.querySelector(':root');
    r.style.setProperty('--statusHeight', (l.offsetHeight + 5) + "px");

    console.log(l.style.height)
    console.log(l.style.width)
    console.log(l.style)
    console.log(l)
    console.log(l.offsetHeight)
}
outputsize()

new ResizeObserver(outputsize).observe(h)

const iframeStyle = document.getElementById("atabook");

const style = document.createElement('style')

iframeStyle.styleSheet = "https://icebro.party/css/style.css"