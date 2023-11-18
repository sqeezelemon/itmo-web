window.addEventListener("DOMContentLoaded", function () {
    let debug_div = document.createElement('div');
    debug_div.classList.add("debug");
    this.document.body.appendChild(debug_div);
});

window.addEventListener('load', function () {
    let loadtime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    let p = document.createElement("p");
    // let pageload = document.getElementById("debug-pageload");
    p.innerText = `Load time: ${loadtime}ms`
    let debug_div = document.querySelector('div.debug');
    debug_div.appendChild(p);
});