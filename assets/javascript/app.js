window.onload = function(){
    $('#start').on('click', countDn)
    //$('#start').on('click', question)
};

var intervalId;
var countRunning = false;
var time = 21;

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
    var ans = questions[0].answer;
    console.log(ans);
    $('#question').text(questions[0].question);

    for (var i = 0; i < questions[0].options.length; i++){
            var btn = $('<button>');
            var brTag = $('<br>');
            btn.addClass('options');
            btn.attr('answer', questions[0].options[i]);
            btn.text(questions[0].options[i]);
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
    showQuestionOne();
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

