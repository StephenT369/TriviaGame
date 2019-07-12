window.onload = function(){
    $('#start').on('click', countDn)
};

var intervalId;

var countRunning = false;
var time = 21;

function countDn(){
    clearInterval(intervalId);
    $('#start').remove();
    $('#timeCntr').text('21');
    intervalId = setInterval(count, 3000);
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
}