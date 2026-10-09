let cart = 0;

    function addToCart() {
      cart++;

      document.getElementById("cartCount").textContent = cart;

      // Tiny feedback animation
      const count = document.getElementById("cartCount");

      count.style.color = "#49eaff";

      setTimeout(() => {
        count.style.color = "";
      }, 400);
    }

    function scrollToProducts() {
      document
        .getElementById("products")
        .scrollIntoView({
          behavior: "smooth"
        });
    }

    function subscribe() {
      alert(
        "You're in! Your 15% discount code is: NEON15"
      );
    }