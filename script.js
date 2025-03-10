var typed = new Typed("#typing", {
    strings: ["a Frontend Developer", "a UI/UX Designer"], 
    typeSpeed: 100,  // Typing speed
    backSpeed: 60,   // Backspace speed
    loop: true       // Keep looping
});

// Smooth scrolling & active link highlighting
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");

    function setActiveLink() {
        let fromTop = window.scrollY;
        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop <= fromTop + 100 &&
                section.offsetTop + section.offsetHeight > fromTop + 100
            ) {
                navLinks.forEach(link => link.classList.remove("active"));
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveLink);
});
