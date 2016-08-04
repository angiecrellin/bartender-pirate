

//questions


var questions = [{
        title: 'Do ye like yer drinks strong?',
        answers: ['aye', 'nay'],
        ingredient: 'strong'
    }, {
        title: 'Do ye like it with a salty tang?',
        answers: ['aye', 'nay'],
        ingredient: 'salty'
    }, {
        title: 'Are ye a lubber who likes it bitter?',
        answers: ['aye', 'nay'],
        ingredient: 'bitter'

    }, {
        title: 'Would ye like a bit of sweetness with yer poison?',
        answers: ['aye', 'nay'],
        ingredient:'sweet'
    }, {
        title: 'Are ye one for a fruity finish?',
        answers: ['aye', 'nay'],
        ingredient: 'fruity'
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

var Order = function(){
	this.order=[]	
};

Order.prototype.addIngredient=function(category){
	var ingredients = pantry[category]
	var randomId = Math.floor(Math.random() * ingredients.length)
	this.order.push(ingredients[randomId])
}
Order.prototype.getFinalOrder=function(){
	if (this.order.length === 0){
		return 'You didn\'t pick anything!'
	}
	return this.order.join(', ')
}
var order = new Order 

hideDrinkOrder();



var currentQuestion = -1
nextQuestion();


function nextQuestion() {
    currentQuestion++
    if (currentQuestion == questions.length) {
    	showDrinkOrder();
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
    nextQuestion();
})



function getPreference() {
    var question = questions[currentQuestion]
    var preference = $('.answers').find('input:checked').val()
    console.log(preference);
    if (preference === '0') {
    	order.addIngredient(question.ingredient);
    console.log(order.order);
    }


}


function hideDrinkOrder () {
	$('.drinkOrder').hide();
}

function showDrinkOrder () {
	hideQuestions();
	$('.drinkOrder').find('.drinkName').text(order.getFinalOrder());
	$('.drinkOrder').show();

}
function hideQuestions () {
	$('.question-page').hide();
}
function showQuestions() {
	$('.question-page').show()
}
function newOrder () {
	hideDrinkOrder();
	showQuestions();
	order = new Order
	currentQuestion = -1
	nextQuestion();
}
$('.newOrder').on('click', newOrder)




// loop through questions randomly picking an ingredient for each category answered 'aye' (at least two ingredients)

//append .drinkName li with those ingredients
