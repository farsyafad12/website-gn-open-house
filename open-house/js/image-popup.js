function openPopup(image) {
    const popup = document.getElementById("image-popup");
    const popupContent = document.getElementById("popup-content");

    // Menampilkan popup
    popup.style.display = "flex";

    // Menetapkan gambar yang akan ditampilkan di popup setelah gambar selesai dimuat
    const tempImage = new Image();
    tempImage.src = image.src;
    tempImage.onload = function () {
      popupContent.src = image.src;
    };

    // Menutup popup saat di-klik di luar gambar
    popup.onclick = function (event) {
      if (event.target === popup) {
        closePopup();
      }
    };
  }

  function closePopup() {
    const popup = document.getElementById("image-popup");
    popup.style.display = "none";
  }

  function openPopupWithImageSrc(imageSrc) {
    const popup = document.getElementById("image-popup");
    const popupContent = document.getElementById("popup-content");

    // Menampilkan popup
    popup.style.display = "flex";

    // Menetapkan gambar yang akan ditampilkan di popup
    popupContent.src = imageSrc;

    // Menutup popup saat di-klik di luar gambar
    popup.onclick = function (event) {
      if (event.target === popup) {
        closePopup();
      }
    };
  }