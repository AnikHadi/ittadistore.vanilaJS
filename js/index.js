const $ = (className) => {
  const el = document.querySelectorAll(className);
  if (el.length === 1) {
    return el[0];
  } else {
    return el;
  }
};

const sliderTime = 3000;
const categoryTime = 5000;

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

// ? category Slider starts here
let slidStaIndex = 0;
const categorySlider = $(".slide-category");
let myArray = Array.from(categorySlider);
const autoSliderTotalCategory = () => {
  setTimeout(autoSliderTotalCategory, categoryTime);
  if (slidStaIndex + 6 === myArray.length) {
    slidStaIndex = 0;
  } else {
    slidStaIndex++;
  }
  categorySlider.forEach((cat, i) => {
    cat.style.display = "none";
  });
  let newCategorySlider = myArray.slice(slidStaIndex, slidStaIndex + 6);
  newCategorySlider.forEach((cat, i) => {
    cat.style.display = "block";
  });
};
autoSliderTotalCategory();
// ? category Slider End here

function showProducts(arr, active) {
  arr.forEach((product, i) => {
    product.style.display = "none";
    if (active) {
      product.style.display = "flex";
    } else {
      if (i < 12) {
        product.style.display = "flex";
      }
    }
  });
}

//! Grocery Start Here
const groceryExtraBtn = $(".groceryContainer .extend");
const groceryAllCard = $(".groceryContainer .productCard");

groceryAllCard.forEach((item, i) => {
  if (i < 12) {
    item.style.display = "flex";
  }
});

groceryExtraBtn.addEventListener("click", () => {
  groceryExtraBtn.classList.toggle("active");
  const classArr = groceryExtraBtn.className.split(" ")[1];
  showProducts(groceryAllCard, classArr);
});

//! Grocery End Here

// ? Boi Ghor Start
const boiExtraBtn = $(".boiContainer .extend");
const boiAllCard = $(".boiContainer .productCard");

boiAllCard.forEach((item, i) => {
  if (i < 12) {
    item.style.display = "flex";
  }
});
boiExtraBtn.addEventListener("click", () => {
  boiExtraBtn.classList.toggle("active");
  const classArr = boiExtraBtn.className.split(" ")[1];
  showProducts(boiAllCard, classArr);
});
// ? Boi Ghor End

// ? Boi Show Pice Start
const showPiceExtraBtn = $(".showPiceContainer .extend");
const showPiceAllCard = $(".showPiceContainer .productCard");

showPiceAllCard.forEach((item, i) => {
  if (i < 12) {
    item.style.display = "flex";
  }
});
showPiceExtraBtn.addEventListener("click", () => {
  showPiceExtraBtn.classList.toggle("active");
  const classArr = showPiceExtraBtn.className.split(" ")[1];
  showProducts(showPiceAllCard, classArr);
});
// ? Boi Show Pice End

// * Footer Start
const footer = document.querySelector("year");
footer.innerText = new Date().getFullYear();
// * Footer End
