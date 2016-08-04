//questions


var questions = [{
        title: 'Do ye like yer drinks strong?',
        answers: ['aye', 'nay']
    }, {
        title: 'Do ye like it with a salty tang?',
        answers: ['aye', 'nay']
    }, {
        title: 'Are ye a lubber who likes it bitter?',
        answers: ['aye', 'nay']
    }, {
        title: 'Would ye like a bit of sweetness with yer poison?',
        answers: ['aye', 'nay']
    }, {
        title: 'Are ye one for a fruity finish?',
        answers: ['aye', 'nay']
    },

];


console.log(questions);

//ingredients

var pantry = 

    ['glug of rum', 'slug of whiskey', 'splash of gin',
    'olive on a stick', 'salt-dusted rim', 'rasher of bacon',
    'shake of bitters', 'spalsh of tonic', 'twist of lemon peel',
    'sugar cube', 'spoonful of honey', 'splash of cola',
    'slice of orange', 'dash of cassis', 'cherry on top']


console.log(panty);

//construct object 





var currentQuestion = -1


function nextQuestion() {
    currentQuestion++
    if (currentQuestion == questions.length) {
        return
    }


    var question = questions[currentQuestion];
    var $page = $('.question-page');
    $page.find('.title').text(question.title);
    var $answers = $page.find('.answers');
    $answers.empty();
    question.answers.forEach(function(answer, index) {
        $answers.append('<li><input type ="radio" name ="answer" value="' + index + '" required />' + '  ' + answer + '</li>');
    })

}



$('.question-page').on('submit', function(event) {
    event.preventDefault();
    nextQuestion();
    getPreference();

})



function getPreference() {
    var question = questions[currentQuestion]
    var preference = $('.answers').find('input:checked').val()

}

console.log(preference);
