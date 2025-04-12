document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Bỏ hết class active
            navLinks.forEach(l => l.classList.remove("active"));

            // Thêm class active cho thằng vừa bấm
            link.classList.add("active");
        });
    });
});
