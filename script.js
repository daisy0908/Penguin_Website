<script>
document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }

    // Dropdown Toggle Function
    function toggleDropdown() {
        let dropdownMenu = document.getElementById("dropdown-menu");
        let icon = document.getElementById("dropdown-icon");

        if (dropdownMenu) {
            dropdownMenu.classList.toggle("hidden");
        }
        if (icon) {
            icon.classList.toggle("rotate-180");
        }
    }

    // Attach event listener to dropdown button
    const dropdownButton = document.querySelector(".dropdown-button");
    if (dropdownButton) {
        dropdownButton.addEventListener("click", toggleDropdown);
    }

    // Highlight Active Navigation Link
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

    // Initialize AOS Animation
    if (typeof AOS !== "undefined") {
        AOS.init();
    }
});
</script>
