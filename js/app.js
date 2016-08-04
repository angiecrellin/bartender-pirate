

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

var pantry = {

    strong:['glug of rum', 'slug of whiskey', 'splash of gin'],
    salty: ['olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
    bitter:['shake of bitters', 'spalsh of tonic', 'twist of lemon peel'],
    sweet:['sugar cube', 'spoonful of honey', 'splash of cola'],
    fruity:['slice of orange', 'dash of cassis', 'cherry on top']
    
};

//constructor for chosen ingredients

var Order = function(orderIngredients){

	this.strong = orderIngredients;
	this.salty = orderIngredients;
	this.bitter = orderIngredients;
	this.sweet = orderIngredients;
	this.fruity = orderIngredients;

};

hideDrinkOrder();



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
    console.log(preference);
}

function hideDrinkOrder () {
	$('.drinkOrder').hide();
}

function showDrinkOrder () {
	$('.drinkOrder').show();
}



// loop through questions randomly picking an ingredient for each category answered 'aye' (at least two ingredients)

//append .drinkName li with those ingredients
