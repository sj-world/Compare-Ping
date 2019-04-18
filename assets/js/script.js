const menuBtn = document.querySelector('.menu');

menuBtn.onclick = function() {
    console.log('ok')

    openMenu();
}

var openMenu = function() {
    console.log('fine');

    document.getElementById("myDropdown").classList.toggle("show");
}

