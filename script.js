if (window.matchMedia("(max-width: 500px)").matches) {
  function setupSectionBlur(
    sectionId,
    imageClass,
    clickedClass,
    hasClickedClass
  ) {
    const section = document.querySelector(`#${sectionId}`);
    const images = section.querySelectorAll(`.${imageClass}`);

    images.forEach((img) => {
      img.addEventListener("click", function () {
        if (this.classList.contains(clickedClass)) {
          this.classList.remove(clickedClass);

          images.forEach((otherImg) => {
            otherImg.classList.remove(clickedClass);
          });
          section.classList.remove(hasClickedClass);
        } else {
          section.classList.add(hasClickedClass);

          images.forEach((otherImg) => {
            otherImg.classList.remove(clickedClass);
          });

          this.classList.add(clickedClass);
        }
      });
    });
  }

  setupSectionBlur("sessao-doces1", "doces1-imgs", "clicked", "has-clicked");
  setupSectionBlur("sessao-doces2", "doces2-imgs", "clicked2", "has-clicked2");
  setupSectionBlur("sessao-doces3", "doces3-imgs", "clicked3", "has-clicked3");
  setupSectionBlur("sessao-doces4", "doces4-imgs", "clicked4", "has-clicked4");

  const scrollElements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  scrollElements.forEach((el) => observer.observe(el));
}
