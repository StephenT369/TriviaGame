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
    $('#timeRm').append('Time Remaining: ');
    $('#secs').append(' Seconds');
    var timeOutId = function(){setTimeout(timeUp, 21000);};
    var ans = questions[0].answer;
    timeOutId();
    $('#question').text(questions[0].question);

    for (var i = 0; i < questions[0].options.length; i++){
            var btn = $('<button>');
            var brTag = $('<br>');
            btn.addClass('options');
            btn.attr('answer', questions[0].options[i]);
            btn.text(questions[0].options[i]);
            $('#btn-options').append(btn).append(brTag);   
    };
    $('[answer]').on('click', function(event) {
        var selected = $(this).attr('answer');
            if (selected == ans){
                stop();
                clearTimeout(timeOutId);
                correct++;
                $('#question').empty();
                $('#btn-options').empty();
                $('#question').append('<h2>Correct!</h2>');
                setTimeout(showQuestionTwo, 5000);

            } else {
                stop();
                clearTimeout(timeOutId);
                incorrect++;
                $('#question').empty();
                $('#btn-options').empty();
                $('#question').append('<h2>Wrong!</h2><span>The correct answer was: ' + ans + '</span>');
                setTimeout(showQuestionTwo, 5000);
            }
    });
        function timeUp(){
            setTimeout(showQuestionTwo, 5000);
            $('#question').empty();
            $('#btn-options').empty();
            $('#question').append('<h2>Out of Time!</h2><span>The correct answer was: ' + ans + '</span>');
            unanswered++;

        };
};

var showQuestionTwo = function(){
    countDn();
    setTimeout(timeUp, 21000);
    var timeOutId = function(){setTimeout(timeUp, 21000);};
    var ans = questions[1].answer;

    $('#question').text(questions[1].question);

    for (var i = 0; i < questions[1].options.length; i++){
            var btn = $('<button>');
            var brTag = $('<br>');
            btn.addClass('options');
            btn.attr('answer', questions[1].options[i]);
            btn.text(questions[1].options[i]);
            $('#btn-options').append(btn).append(brTag);   
    };
    $('[answer]').on('click', function(event) {
        var selected = $(this).attr('answer');
            if (selected == ans){
                stop();
                clearTimeout(timeOutId);
                correct++;
                $('#question').empty();
                $('#btn-options').empty();
                $('#question').append('<h2>Correct!</h2>');
                setTimeout(showQuestionThree, 5000);

            } else {
                stop();
                clearTimeout(timeOutId);
                incorrect++;
                $('#question').empty();
                $('#btn-options').empty();
                $('#question').append('<h2>Wrong!</h2><span>The correct answer was: ' + ans + '</span>');
                setTimeout(showQuestionThree, 5000);
            }
    });
    function timeUp(){
        setTimeout(showQuestionThree, 5000);
        $('#question').empty();
        $('#btn-options').empty();
        $('#question').append('<h2>Out of Time!</h2><span>The correct answer was: ' + ans + '</span>');
        unanswered++;
    };
};

var showQuestionThree = function(){
    countDn();
    setTimeout(timeUp, 21000);
    var timeOutId = function(){setTimeout(timeUp, 21000);};
    var ans = questions[2].answer;

    $('#question').text(questions[2].question);

    for (var i = 0; i < questions[2].options.length; i++){
            var btn = $('<button>');
            var brTag = $('<br>');
            btn.addClass('options');
            btn.attr('answer', questions[2].options[i]);
            btn.text(questions[2].options[i]);
            $('#btn-options').append(btn).append(brTag);   
    };
    $('[answer]').on('click', function(event) {
        var selected = $(this).attr('answer');
            if (selected == ans){
                stop();
                clearTimeout(timeOutId);
                correct++;
                $('#question').empty();
                $('#btn-options').empty();
                $('#question').append('<h2>Correct!</h2>');
                setTimeout(allDone, 5000);

            } else {
                stop();
                clearTimeout(timeOutId);
                incorrect++;
                $('#question').empty();
                $('#btn-options').empty();
                $('#question').append('<h2>Wrong!</h2><span>The correct answer was: ' + ans + '</span>');
                setTimeout(allDone, 5000);
            }
    });
    function timeUp(){
        setTimeout(allDone, 5000);
        $('#question').empty();
        $('#btn-options').empty();
        $('#question').append('<h2>Out of Time!</h2><span>The correct answer was: ' + ans + '</span>');
        unanswered++;
    };
};

function allDone(){
    $('#question').empty();
    $('#question').append('<h2>All done, here are your scores!</h2><br>');
    $('#question').append('Correct Answers: '+ correct +'<br>');
    $('#question').append('Incorrect Answers: '+ incorrect +'<br>');
    $('#question').append('Unanswered: '+ unanswered +'<br>');
};
function countDn(){
    time = 21;
    clearInterval(intervalId);
    $('#start').remove();
    $('#timeCntr').text('21');
    intervalId = setInterval(count, 1000);
    if (!countRunning){
    };
};

function count(){
time--;
$('#timeCntr').text(time);

if (time <= 0){
    
    stop();
}
};

function stop(){
    clearInterval(intervalId);
    return countRunning;
};

