const initSlider = () => {
  const offersList = document.querySelector(".offers-wrapper");
  const offerItem = document.querySelector(".offers-item");
  const sliderButtons = document.querySelectorAll(".slider-buttons .nav-svg");
  const sliderScrollBar = document.querySelector(".slider-scrollbar");
  const scrollBarThumb = document.querySelector(".scrollbar-thumb");
  const maxScrollLeft = offersList.scrollWidth - offersList.clientWidth;

  // handle scrollbar thumb drag
  scrollBarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollBarThumb.offsetLeft;

    // update thumb position on mouse move
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition =
        sliderScrollBar.getBoundingClientRect().width -
        scrollBarThumb.offsetWidth;
      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;
      scrollBarThumb.style.left = `${boundedPosition}px`;
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

  sliderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "previous-btn" ? -1 : 1;
      const scrollAmount = (offerItem.clientWidth + 32) * direction;

      offersList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const updateScrollThumbPosition = () => {
    const scrollPosition = offersList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollBar.clientWidth - scrollBarThumb.offsetWidth);
    scrollBarThumb.style.left = `${thumbPosition}px`;
  };

  offersList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
  });
};

window.addEventListener("load", initSlider);
