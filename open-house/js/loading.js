window.addEventListener("load", function () {
    // Semua elemen halaman telah dimuat
    var loadingElement = document.querySelector(".dots-container");
    var contentElement = document.querySelector(".halaman");

    // Sembunyikan elemen "loading" dan tampilkan elemen "content"
    loadingElement.style.display = "none";
    contentElement.style.display = "block";
});