window.onload = function(){
    $('#start').on('click', showQuestionOne)
    //$('#start').on('click', question)
};

var intervalId;
var countRunning = false;
var time = 21;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var questions = [
    {
        question: 'What is 1+1?',
        options: ['2', '3', '4'],
        answer: 2
    },
    
    {
        question: 'What is 2+2?',
        options: ['0', '4', '6'],
        answer: 4
    },

    {
        question: 'What is 3+3?',
        options: ['4', '5', '6'],
        answer: 6    
    }
];

var questionsTrack = questions.length;

var showQuestionOne = function(){
    countDn();
    setTimeout(timeUp, 21000);
    var ans = questions[0].answer;

    $('#question').text(questions[0].question);

    for (var i = 0; i < questions[0].options.length; i++){
            var btn = $('<button>');
            var brTag = $('<br>');
            btn.addClass('options');
            btn.attr('answer', questions[0].options[i]);
            btn.text(questions[0].options[i]);
            $('#btn-options').append(btn).append(brTag);   
    };

        function timeUp(){
            setTimeout(showQuestionTwo, 5000);
            $('#question').empty();
            $('<button>').remove;
            $('#question').append('<h2>Out of Time!</h2><span>The correct answer was: ' + ans + '</span>');
        };
   

};

var showQuestionTwo = function(){
    setTimeout()
    var ans = questions[1].answer;

    $('#question').text(questions[1].question);

    for (var i = 0; i < questions[1].options.length; i++){
            var btn = $('<button>');
            var brTag = $('<br>');
            btn.addClass('options');
            btn.attr('answer', questions[1].options[i]);
            btn.text(questions[1].options[i]);
            $('#btn-options').append(btn).append(brTag);   
    }

};

var showQuestionThree = function(){
    setTimeout()
    var ans = questions[2].answer;

    $('#question').text(questions[2].question);

    for (var i = 0; i < questions[2].options.length; i++){
            var btn = $('<button>');
            var brTag = $('<br>');
            btn.addClass('options');
            btn.attr('answer', questions[2].options[i]);
            btn.text(questions[2].options[i]);
            $('#btn-options').append(btn).append(brTag);   
    }

};

function countDn(){
    clearInterval(intervalId);
    $('#start').remove();
    $('#timeCntr').text('21');
    intervalId = setInterval(count, 1000);
    $('#timeRm').append('Time Remaining: ');
    $('#secs').append(' Seconds');
    if (!countRunning){
    };

};



function count(){
time--;
$('#timeCntr').text(time);
console.log(time);

if (time <= 0){
    stop();
}
};

function stop(){
    clearInterval(intervalId);
    return countRunning;
};

