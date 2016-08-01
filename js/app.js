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

var currentQuestion = -1;

function nextQuestion(){
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
    getPreference(); 
}) 

nextQuestion();

function getPreference() {
    var question = questions[currentQuestion]
    var preference = $('.answers').find('input:checked').val()

   }


