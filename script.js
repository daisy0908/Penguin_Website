// Function to handle dropdown toggle
function toggleDropdown() {
    let dropdownMenu = document.getElementById("dropdown-menu");
    let icon = document.getElementById("dropdown-icon");
    dropdownMenu.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
}

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); 
    const navLinks = document.querySelectorAll(".nav-link");
    const serviceNav = document.querySelector(".nav-link[href='javascript:void(0)']"); 
    const serviceLinks = document.querySelectorAll(".service-link");

    localStorage.removeItem("lastVisitedService");

    navLinks.forEach(link => link.classList.remove("active"));

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref === currentPage) {
            link.classList.add("active");
        }
    });

    serviceLinks.forEach(link => {
        link.style.color = "black"; 

        link.addEventListener("click", function () {
            localStorage.setItem("lastVisitedService", link.getAttribute("href"));
            serviceNav.classList.add("active");
        });
    });

    if (localStorage.getItem("lastVisitedService") === currentPage) {
        serviceNav.classList.add("active");
    }
});

AOS.init();
 function toggleDropdown() {
     document.getElementById("dropdown-menu").classList.toggle("hidden");
        }