const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const thumbnails = document.querySelectorAll(".content img");

// When you click a small image → show it big
thumbnails.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// Click anywhere outside → close the big image
lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

