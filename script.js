const submitBtn = document.querySelector(".submit");
const ratingContent = document.querySelector(".rating-content");
const thankyouContent = document.querySelector(".thankyou");
const ratingComponents = document.querySelectorAll(".rating-component");
const selectedRating = document.querySelector(".selected-rating");
let rating;

submitBtn.addEventListener("click", onSubmit);

ratingComponents.forEach((ratingComponent) => {
  ratingComponent.addEventListener("click", ratingHandler);
});

function onSubmit() {
  // submitBtn.removeAttribute("disabled");
  if (rating == undefined) {
    return;
  }

  ratingContent.classList.add("hide");

  selectedRating.innerHTML = rating;
  thankyouContent.classList.remove("hide");

  // console.log("Submit");
}

function ratingHandler(event) {
  ratingComponents.forEach((ratingComponent) => {
    ratingComponent.classList.remove("active");
  });

  event.target.classList.add("active");
  rating = event.target.innerText;
  // console.log("rating click");
}
