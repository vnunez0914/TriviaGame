
//questions, choices and answers for game
//set up timer
//
var timer = 15; //count down timer to go onto the next question 
var score = 0;
var currentQuestion = 0;//shows current questions
var intervalId;
var triviaQuestions = [
    {
        question: "In what year did Spider-Man make his comic debut?",
        choices: ["1962", "2000", "1986", "1990"],
        answer: "1962"
    },
    {
        question: "What is Magnetos special Power?",
        choices: ["Magnetism, Telepathy, Flight, Super Strength"],
        answer: "Magnetism"
    },

    {
        question: "What is the name of Thor's hammer?",
        choices: ["Stormbreaker, Jarnbjorn, Thunder Strike, Mjolnir"],
        answer: "Mjolnir"
    },

    {
        question: "Which one of these Heroes does not belong in the Fantastic Four?",
        choices: ["Thing", "Human Torch", "Mister Fantastic", "Mystique"],
        answer: "Mystique"
    },

    {
        question: "What is Steve Roger's super hero name?",
        choices: ["Wolverine", "Hawkeye", "Captain America", "Cable"],
        answer: "Captain America"
    }
];
console.log(triviaQuestions)

//start timer/quiz


$(".start").on("click", run);
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

}
//timer countdown and display question
function decrement() {
    timer--;

    displayQuestion()
    if (timer === 0) {
        stop();

    }
}

function stop() {
    clearInterval(intervalId);
}



function displayQuestion() {
    var question = triviaQuestions[currentQuestion].question;//displays first question
    var options = triviaQuestions[currentQuestion].choices;//displays choices
    //displays "Timer" and the var timer on page
    $("#timer").html("<h4>" + " Time: " + timer + "</h4")
    $("#quiz").html("<h4>" + question + "</h4>");
};

function displayChoices() {//display choices

    for (var i = 0; i <options.length; i++) {

    }
};