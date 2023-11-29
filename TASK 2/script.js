const quotes = [
    "Hello..!! This is Shama, Have a nice day.",
    "The quick brown fox jumps over the lazy dog.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "In the beginning, God created the heavens and the earth.",
    "Two roads diverged in a wood, and I took the one less traveled by."
];

function startTest() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteDisplay").innerText = quote;
    document.getElementById("typedText").value = "";
    document.getElementById("result").innerText = "";

    const startTime = new Date().getTime();

    document.getElementById("typedText").addEventListener("input", function () {
        const typedText = document.getElementById("typedText").value;
        if (typedText === quote) {
            const endTime = new Date().getTime();
            const totalTime = (endTime - startTime) / 1000; // in seconds
            const wordsPerMinute = (quote.split(' ').length / totalTime) * 60;

            document.getElementById("result").innerText = `You typed the quote in ${totalTime.toFixed(2)} seconds. Your typing speed is ${wordsPerMinute.toFixed(0)} words per minute.`;
        }
    });
}
