const $ = (className) => {
  const el = document.querySelectorAll(className);
  if (el.length === 1) {
    return el[0];
  } else {
    return el;
  }
};

const sliderTime = 3000;

// // ! Search BTN starts here
// const searchBtn = $("#searchBtn");
// const searchInput = $("#searchInput");

// searchBtn.addEventListener("click", () => {
//   console.log("clicked :" + searchInput.value);
//   searchInput.value = "";
// });
// searchInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     console.log("value: " + e.target.value);
//     searchInput.value = "";
//   }
// });
// // ! Search BTN End here

// ! Slider starts here
let sliderFIndex = 0;
const automaticSlider = () => {
  setTimeout(automaticSlider, sliderTime);
  let pics;
  const topSliders = $(".banner-carousel");
  for (pics = 0; pics < topSliders.length; pics++) {
    topSliders[pics].style.display = "none";
  }
  sliderFIndex++;
  if (sliderFIndex > topSliders.length) {
    sliderFIndex = 1;
  }
  topSliders[sliderFIndex - 1].style.display = "block";
};
automaticSlider();
// ! Slider End here

// * Footer Start
const footer = document.querySelector("year");
footer.innerText = new Date().getFullYear();
// * Footer End
