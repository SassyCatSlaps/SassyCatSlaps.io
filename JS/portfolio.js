

/* START hover effect for left-side brancing icon tool tip */
document.addEventListener("DOMContentLoaded", function () {
    var tooltip = document.getElementById("side-icon-tooltip");
    var codeBranchIcon = document.querySelector("i.fas.fa-code-branch");

    codeBranchIcon.addEventListener("mouseenter", function () {
        tooltip.style.display = "block";
    });

    codeBranchIcon.addEventListener("mouseleave", function () {
        tooltip.style.display = "none";
    });
});
/* END hover effect for left-side branching icon */

/* START NavBar scroll effect */
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollPos = window.pageYOffset;
var navbar = document.getElementById("navbar");
var navbarHeight = navbar.offsetHeight;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    }
    else {
        navbar.style.top = "-" + navbarHeight + "px";
    }

    prevScrollPos = currentScrollPos;
};
/* END NavBar scroll effect */

/* START NavBar ToolTips */
document.addEventListener("DOMContentLoaded", function () {
    var tooltips = document.querySelectorAll("#navbar [data-tooltip]");

    tooltips.forEach(function (tooltip) {
        var tooltipText = tooltip.getAttribute("data-tooltip");
        var tooltipElement = document.createElement("span");
        tooltipElement.className = "tooltip";
        tooltipElement.textContent = tooltipText;

        tooltip.appendChild(tooltipElement);

        tooltip.addEventListener("mouseenter", function () {
            tooltipElement.style.display = "block";
        });

        tooltip.addEventListener("mouseleave", function () {
            tooltipElement.style.display = "none";
        });
    });
});
/* END NavBar ToolTips */