var quotes = [
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "― Marilyn Monroe",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    author: "― Frank Zappa",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "― Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "― Bernard M. Baruch",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "― Dr. Seuss",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "― Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "― Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "― Robert Frost",
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "― Mark Twain",
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "― Maya Angelou",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "― Elbert Hubbard",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "― Oscar Wilde",
  },
];

var newQuote = document.getElementById("newQuote");
var lastRandomNum = -1;

function generateQuote() {
  var randomNum;

  do {
    randomNum = Math.trunc(Math.random() * quotes.length);
  } while (randomNum === lastRandomNum);

  lastRandomNum = randomNum;

  var quote = `<div class="text-center mt-3">
  <p>${quotes[randomNum].quote}</p>
  <p>${quotes[randomNum].author}</p>
  </div>`;
  document.getElementById("newquote").innerHTML = quote;
}
