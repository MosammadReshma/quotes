const quoteElement = document.getElementById('quote');
const newQuoteElement = document.getElementById('.new-quote');
const quoteBox = document.querySelector('.quote-box');
const boxContents = document.querySelector('.box-contents');
const quotes = [
    "The only way to do great work is to love what you do.",
    "Does the moon also see its reflectionin water and curse itself for the scars?",
    "Cold water feels warm when your hands are freezing.",
    "Maybe your garden isn't growing because everytime a flower grows, you cut it, to prove to someone  that you're a gardener.",
    "Both fear and faith ask you to beleive in something you can't see. You choose.",
    "Can you remember who you were before the world told you who you should be?",
    "If only you knew you were 100 rejections away from your dream think how excited you would be everytime you got rejected.",
    "sometimes you will never know the value of a moment until it becomes a memory.",
    "A dream isn't that which you see while sleeping, it is something that doesn't let you sleep.",
    "And when you want something so bad, all the universe conspires in helping you to achieve it.",
    "Why is it that you search for your own beauty in the eyes of others?",
    "You have to be odd to be number one.",
    "What if I fall?' bro what if you fly?",
    "Every story has a happy ending, the remember, the next time you fail, it isn't the end of your story."
]

function getQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
