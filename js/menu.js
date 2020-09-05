var	accordeon = document.getElementById('menu-accordeon');

function openClose(e) {
    let _target = e.target.closest("li");
    if (_target.classList.contains("active")) {
        _target.classList.remove("active");
    } else {
        let _active = document.querySelector(".active");
        if (_active) {
            _target.classList.add("active");
        }
        _target.classList.add("active");
    }
}

accordeon.addEventListener('click', openClose);