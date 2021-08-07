const quotes = [
  {
    quote: "When you go through hardships and decide not to surrender, that is strength.",
    author: "Arnold Schwarzenegger"
  },
  {
    quote: "It is kind of fun to do the impossible.",
    author: "Walt Disney"
  },
  {
    quote: "There are better starters than me but I’m a strong finisher.",
    author: "Usain Bolt"
  },
  {
    quote: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller"
  },
  {
    quote: "I've failed over and over and over again in my life and that is why I succeed.",
    author: "Michael Jordan"
  }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

quoteIdx = Math.floor(Math.random() * quotes.length);
const randQuote = quotes[quoteIdx]; // random quote

quote.innerText = randQuote.quote;
author.innerText = randQuote.author;

//console.log(quotes[quoteIdx]);


