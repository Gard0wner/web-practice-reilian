document.addEventListener("DOMContentLoaded", () => {

  const burger = document.querySelector(".burger-menu");
  const headerBottom = document.querySelector(".header-bottom");

  if (burger && headerBottom) {
    burger.addEventListener("click", () => {
      headerBottom.classList.toggle("active");
      burger.classList.toggle("open");
    });
  }

  const modal = document.getElementById("quoteModal");
  const triggers = document.querySelectorAll(".trigger-modal");
  const closeBtn = document.querySelector(".modal-close");

  if (modal) {
    triggers.forEach((btn) =>
      btn.addEventListener("click", () => modal.classList.add("active")),
    );
    if (closeBtn)
      closeBtn.addEventListener("click", () =>
        modal.classList.remove("active"),
      );

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  if (
    typeof Swiper !== "undefined" &&
    document.querySelector(".testimonial-swiper")
  ) {
    const swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  }

  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    if (!form.classList.contains('no-override')) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Відправлено!');
      });
    }
  });

});
