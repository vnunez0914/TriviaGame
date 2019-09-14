
//questions, choices and answers for game
//set up timer
//
var timer = 15; //count down timer to go onto the next question 
var score = 0;
var currentQuestion = 0;//shows current questions
var intervalTimer;
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

//for(var i = 0; i < triviaQuestions.length; i++){
    //.log(triviaQuestions[i])
//}

function displayQuestion(){
    var question = triviaQuestions[currentQuestion].question;//displays first question
    var choices = triviaQuestions[currentQuestion].choices;//displays choices
    $("#timer").html("<h4>"+ " Timer: " + timer + "</h4") //displays "Timer" and the var timer on page
    $("#questions").html("<h4>" + question + "</h4>");
    
};

function displayChoices(choices){
    var result ='';
    for(var i = 0; i < choices.length; i++){
        result+= $("#game").html("<p class=choice data-answer=" + choices + '>' + choices + "</p>");
    }

    return result;
}
 displayQuestion();//calls the function

