window.onload = function(){
    $('#start').on('click', countDn)
    $('#start').on('click', question)
};

var intervalId;
var countRunning = false;
var time = 21;
var questions = [
    {
        question: 'What is 1+1?',
        options: ['2', '3', '4'],
        answer: 0
    },
    
    {
        question: 'What is 2+2?',
        options: ['0', '4', '6'],
        answer: 1
    },

    {
        question: 'What is 3+3?',
        options: ['4', '5', '6'],
        answer: 2    
    }
];


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

function question(){
    $('#question').text('test question')
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
}