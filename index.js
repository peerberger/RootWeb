window.addEventListener("load", event => {
    for (let index = 1; index < 11; index++) {
        var td = document.getElementById("td"+index);
        td.innerText = index * 100;
    }
})

window.addEventListener("load", event => {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", event => {
        alert("bop");
    });

});

function funcA() {
    alert("bop");
}