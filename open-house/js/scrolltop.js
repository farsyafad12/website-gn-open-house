const scrollToTopButton = document.getElementById("scrollToTop");

        scrollToTopButton.addEventListener("click", function() {
            document.documentElement.scrollTop = 0; // Untuk browser lain selain Firefox
            document.body.scrollTop = 0; // Untuk Firefox
        });

        window.addEventListener("scroll", function() {
            if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 100) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        });