window.addEventListener("DOMContentLoaded", function () {
    nav_items = document.querySelectorAll("header nav a");
    nav_items.forEach(function (item) {
        if (window.location.href.includes(item.getAttribute('href'))) {
            item.classList.add('nav-active')
        } else {
            item.classList.remove('nav-active')
        }
    })
});