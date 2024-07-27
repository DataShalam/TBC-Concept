const offersList = document.querySelector(".offers-wrapper");
const offerItem = document.querySelector(".offers-item");
const offersSliderButtons = document.querySelectorAll(
  ".offers-slider-buttons .nav-svg"
);
const offersSliderScrollBar = document.querySelector(
  ".offers-slider-scrollbar"
);
const offersScrollBarThumb = document.querySelector(".offers-scrollbar-thumb");

const offersInitSlider = () => {
  const maxScrollLeft = offersList.scrollWidth - offersList.clientWidth;

  // handle scrollbar thumb drag
  offersScrollBarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = offersScrollBarThumb.offsetLeft;

    // update thumb position on mouse move
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition =
        offersSliderScrollBar.getBoundingClientRect().width -
        offersScrollBarThumb.offsetWidth;
      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;
      offersScrollBarThumb.style.left = `${boundedPosition}px`;
      offersList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // drag interaction
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  offersSliderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "previous-btn" ? -1 : 1;
      const scrollAmount = (offerItem.clientWidth + 33) * direction;

      offersList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const updateScrollThumbPosition = () => {
    const scrollPosition = offersList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (offersSliderScrollBar.clientWidth - offersScrollBarThumb.offsetWidth);
    offersScrollBarThumb.style.left = `${thumbPosition}px`;
  };

  offersList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
  });
};

const awardsList = document.querySelector(".awards-wrapper");
const awardsItem = document.querySelector(".awards-item");
const awardsSliderButtons = document.querySelectorAll(
  ".awards-slider-buttons .nav-svg"
);
const awardsSliderScrollBar = document.querySelector(
  ".awards-slider-scrollbar"
);
const awardsScrollBarThumb = document.querySelector(".awards-scrollbar-thumb");

const awardsInitSlider = () => {
  const maxScrollLeft = awardsList.scrollWidth - awardsList.clientWidth;

  // handle scrollbar thumb drag
  awardsScrollBarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = awardsScrollBarThumb.offsetLeft;

    // update thumb position on mouse move
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition =
        awardsSliderScrollBar.getBoundingClientRect().width -
        awardsScrollBarThumb.offsetWidth;
      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;
      awardsScrollBarThumb.style.left = `${boundedPosition}px`;
      awardsList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // drag interaction
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  awardsSliderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "previous-btn" ? -1 : 1;
      const scrollAmount = (awardsItem.clientWidth + 33) * direction;

      awardsList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const updateScrollThumbPosition = () => {
    const scrollPosition = awardsList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (awardsSliderScrollBar.clientWidth - awardsScrollBarThumb.offsetWidth);
    awardsScrollBarThumb.style.left = `${thumbPosition}px`;
  };

  awardsList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
  });
};

window.addEventListener("load", () => {
  offersInitSlider();
  awardsInitSlider();
});

///////////////////////////////////////////////////
const burgerMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-navigation");
const headings = document.querySelectorAll(".accordian-item .subheading");

burgerMenu.addEventListener("click", () => {
  burgerMenu.style.display = "none";
  closeMenu.style.display = "block";
  mobileNav.style.zIndex = "100";
  mobileNav.style.opacity = "1";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  burgerMenu.style.display = "block";
  mobileNav.style.zIndex = "-100";
  mobileNav.style.opacity = "0";
});

headings.forEach((heading) => {
  heading.addEventListener("click", () => {
    const content = heading.nextElementSibling;
    content.classList.toggle("open");

    // Optionally, close other accordions
    headings.forEach((h) => {
      if (h !== heading) {
        h.nextElementSibling.classList.remove("open");
      }
    });
  });
});
