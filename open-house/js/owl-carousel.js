$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 4, // Menampilkan satu item per tampilan
      loop: true, // Membuat carousel berputar secara terus-menerus
      autoplay: true, // Mengaktifkan autoplay
      autoplayTimeout: 2000, // Set timeout autoplay ke 5000 milidetik (5 detik)
      autoplayHoverPause: true, // Tidak menghentikan autoplay saat mengarahkan kursor ke atasnya
      responsive: {
        0: {
          items: 1,
          autoplayTimeout: 1750,
          dots: true,
          center: true,
        },
        600: {
          items: 2,
          autoplayTimeout: 2000
        },
        1000: {
          items: 4,
        }
      }
    });
  });