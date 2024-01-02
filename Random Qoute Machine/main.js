const html = document.querySelector("html");
const body = document.querySelector("body");
const box = document.querySelector("#quote-box");
const text = document.querySelector("#text");
const author = document.querySelector("#author");
const quote = document.querySelector("#new-quote");
const tweet = document.querySelector("#tweet-quote");
const button = document.querySelector(".button");

const projectName = "random-quote-machine";
let quotesData;

//background colors
var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

var currentQuote = "",
  currentAuthor = "";

function getQuotes() {
  return $.ajax({
    type: "GET",
    url: "https://type.fit/api/quotes",
    success: function (result, status) {
      if (status === "success") {
        quotesData = JSON.parse(result);
        console.log("quotesData Successful");
        console.log(quotesData);
      }
    },
    error: function (error) {
      alert("An error occured: " + error.status + " " + error.statusText);
    },
  });
}

//Randomizer
function getRandomQuote() {
  return quotesData[Math.floor(Math.random() * quotesData.length)];
  // console.log(quotesData[Math.floor(Math.random() * quotesData.length)]);
}

function getQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.text;
  currentAuthor = randomQuote.author.slice(0, -10);
  console.log(currentAuthor, currentQuote);

  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );

  $("#text").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#text").text(currentQuote);
  });

  $("#author").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#author").html(currentAuthor);
  });

  var color = Math.floor(Math.random() * colors.length);
  html,
    body.animate(
      {
        backgroundColor: colors[color],
        color: colors[color],
      },
      1000
    );
  button.animate(
    {
      backgroundColor: colors[color],
    },
    1000
  );
}

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });
  $("#new-quote").click(function () {
    // alert("i see you");
    getQuote();
  });
});

// $(document).ready(function () {
//   $("#tweet-quote").click(function () {});
// });
