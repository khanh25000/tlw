document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  setTimeout(function () {
    document.querySelector(".loader-wrapper").style.opacity = "0";
    setTimeout(function () {
      document.querySelector(".loader-wrapper").style.display = "none";
    }, 500);
  }, 1500);
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorFollower.style.left = e.clientX + "px";
    cursorFollower.style.top = e.clientY + "px";
  });

  document.addEventListener("mousedown", function () {
    cursor.style.transform = "translate(-50%, -50%) scale(0.7)";
    cursorFollower.style.transform = "translate(-50%, -50%) scale(0.7)";
  });

  document.addEventListener("mouseup", function () {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursorFollower.style.transform = "translate(-50%, -50%) scale(1)";
  });
  const links = document.querySelectorAll("a, button, .btn, .indicator");

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.style.width = "30px";
      cursor.style.height = "30px";
      cursor.style.backgroundColor = "transparent";
      cursor.style.border = "2px solid var(--accent-color)";
      cursorFollower.style.opacity = "0";
    });

    link.addEventListener("mouseleave", () => {
      cursor.style.width = "10px";
      cursor.style.height = "10px";
      cursor.style.backgroundColor = "var(--accent-color)";
      cursor.style.border = "none";
      cursorFollower.style.opacity = "1";
    });
  });
  const sliderEl = document.querySelector(".slider");
  const prevBtn = document.querySelector(".prev-arrow");
  const nextBtn = document.querySelector(".next-arrow");
  const indicatorsContainer = document.querySelector(".slider-indicators");
  const sliderContents = document.querySelectorAll(".slider-content");
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      title: "THÔNG TIN TUYỂN SINH",
    },
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "CƠ HỘI VIỆC LÀM",
    },
    {
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "HOẠT ĐỘNG CLUB TRƯỜNG",
    },
  ];

  let currentSlide = 0;
  function initSlider() {
    slides.forEach((slide, index) => {
      const slideEl = document.createElement("div");
      slideEl.classList.add("slide");
      slideEl.style.backgroundImage = `url(${slide.url})`;
      sliderEl.appendChild(slideEl);
      const indicator = document.createElement("div");
      indicator.classList.add("indicator");
      if (index === 0) {
        indicator.classList.add("active");
      }
      indicator.addEventListener("click", () => {
        goToSlide(index);
      });
      indicatorsContainer.appendChild(indicator);
    });
    sliderContents[0].classList.add("active");
  }
  function goToSlide(index) {
    sliderContents[currentSlide].classList.remove("active");

    currentSlide = index;
    updateSlider();
    sliderContents[currentSlide].classList.add("active");
  }
  function updateSlider() {
    sliderEl.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }
  function nextSlide() {
    sliderContents[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
    sliderContents[currentSlide].classList.add("active");
  }

  function prevSlide() {
    sliderContents[currentSlide].classList.remove("active");

    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
    sliderContents[currentSlide].classList.add("active");
  }
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  let slideInterval = setInterval(nextSlide, 5000);
  sliderEl.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  sliderEl.addEventListener("mouseleave", () => {
    slideInterval = setInterval(nextSlide, 5000);
  });

  initSlider();

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  });

  const buttons = document.querySelectorAll(".btn, .login-btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseover", function () {
      this.style.transform = "translateY(-3px)";
      this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
    });

    button.addEventListener("mouseout", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });
});
