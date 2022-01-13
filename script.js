const quoteBtn = document.querySelector("#get-btn");
const paragraphSection = document.querySelector(".text-section");
const quoteText = document.querySelector(".random-quote");

quoteBtn.addEventListener("click", () => {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      quoteText.textContent = data.data[0].quoteText;
    });
});
