window.onscroll = function () { stickyFunction(); };

var menu = document.getElementById("menu");

var sticky = menu.offsetTop;

function stickyFunction() {
    if (window.pageYOffset + 30 > sticky) {
        menu.classList.add("sticky");
    }
}
