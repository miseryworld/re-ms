const quotes = [
    {
        text: "okay.. I love you with all of my heart and its like i shouldnt say this but you mean everything to meee and you are all mine all of you!!",
        author: "your husband"
    }
]

function generateRandomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote-text').textContent = randomQuote.text;
    document.getElementById('quote-author').textContent = ` - ${randomQuote.author}`;
}

document.getElementById('new-quote-button').addEventListener('click', generateRandomQuote);
generateRandomQuote();
function readAlound(){
    const quoteText = document.getElementById('quote-text'.textContent);
    const utterance = new SpeachSynthesisUtterance(quoteText);
    speechSynthesis.speak(utterance);
}

