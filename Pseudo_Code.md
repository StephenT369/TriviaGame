## TrivaGame Pseudo Code
#Stephen Thompson \^/

var time = 0
var countdown = 0
var correct = 0
var wrong = 0
var notanswered = 0

var questions = [{
    question: '....',
    choices: ['...', '....', '....'],
    answer: 0},
    
    {
    question: '....',
    choices: ['...', '....', '....'],
    answer: 0},
    }]

on page load start timer
    show question
    show answer chocies

    if user clicks correct answer then correct++
    else if user clicks incorrect the wrong++

    if user timer = 0 then notanswered++

    when questions are done, then user has option to start over.



