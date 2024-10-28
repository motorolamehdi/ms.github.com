
// JavaScript for dynamic effects
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".dynamic-title");
    title.addEventListener("mouseover", function() {
        title.style.color = title.style.color === "tomato" ? "#fff" : "tomato";
    });
});
