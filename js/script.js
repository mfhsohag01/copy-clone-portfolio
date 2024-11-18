const navlinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");

const activepage = () => {
  const header = document.querySelector("header");
  const barBox = document.querySelector(".bars-box");

  // Reset header
  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  // Reset nav links
  navlinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Reset barBox
  barBox.classList.remove("active");
  setTimeout(() => {
    barBox.classList.add("active");
  }, 1100);

  // Reset sections
  sections.forEach((section) => {
    section.classList.remove("active");
  });
};

// Add event listeners to nav links
navlinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activepage();

      // Activate clicked link
      link.classList.add("active");

      // Activate corresponding section
      setTimeout(() => {
        if (sections[idx]) {
          sections[idx].classList.add("active");
        }
      }, 1100);
    }
  });
});

// Add event listener to logo link
logoLink.addEventListener("click", () => {
  if (!navlinks[0].classList.contains("active")) {
    activepage();

    // Activate first nav link
    navlinks[0].classList.add("active");

    // Activate first section
    setTimeout(() => {
      if (sections[0]) {
        sections[0].classList.add("active");
      }
    }, 1100);
  }
});

const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume-detail");

    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);
let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;
  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < 4) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 5;
    arrowRight.classList.add("disabled");
  }
  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  if (index > 0) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }
  activePortfolio();
});
