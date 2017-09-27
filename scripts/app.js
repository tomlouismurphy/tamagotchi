const foods = ['bread', 'meat', 'carrot', 'pizza', 'soylent'];

const shuffle = (array) => {
	let i = 0;
	let j = 0;
	let temp = null;
	for (i = array.length - 1; i > 0; i--){
		j = Math.floor(Math.random() * (i + 1));
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

class Tamagotchi {
	constructor(name, favoriteFoods){
		this.name = name;
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
		this.favoriteFoods = favoriteFoods;
		this.healthy = true;
		this.lifeStage = 'baby';
		this.weight = Math.ceil(Math.random() * 5);
		this.iq = Math.ceil((Math.random() * 40) + 80);
		$('.container').prepend('<img id="sprite_1" src="images/defaultsprite.png" />')
	}
	feedTamagotchi(){
		this.hunger--;
	}
	sleepTamagotchi(){
		this.sleepiness = 0;
	}
	playTamagotchi(){
		this.boredom -= 2;
	}
	ageTamagotchi(){
		this.age++;
		$('#stat-0').text('Age: ' + hero.age);
	}
};

const gameSetup = () => {
	for (let i = 0; i < 4; i++){
		const $p = $('<p></p>', {id: 'stat-' + i})
		$p.addClass('stats');
		$('.container').append($p);
	}
	$('#stat-0').text('Age: ' + hero.age);
	$('#stat-1').text('Hunger: ' + hero.hunger);
	$('#stat-2').text('Sleepiness: ' + hero.sleepiness);
	$('#stat-3').text('Boredom: ' + hero.boredom);
	for (let i = 0; i < 3; i++){
		const $button = $('<button></button>', {id: 'action-' + i})
		$button.addClass('interact');
		$('.container').append($button);
	}
	$('#action-0').text('Feed');
	$('#action-1').text('Nighty night!');
	$('#action-2').text('Playtime');
	startTime();
};

const createTamagotchi = () => {
	const $name = $('#gamestart').val();
	$('header').text($name);
	shuffle(foods);
	const $food = foods[0];
	let hero;
	window.hero = new Tamagotchi($name, $food);
}

const startTime = () => {
	let timerVar = setInterval(countTimer, 1000);
	let totalSeconds = 0;
	function countTimer() {
   		++totalSeconds;
   		let hour = Math.floor(totalSeconds / 3600);
   		let minute = Math.floor((totalSeconds - hour * 3600) / 60);
  		let seconds = totalSeconds - (hour * 3600 + minute * 60);
   		$("#timer").text(hour + ":" + minute + ":" + seconds);
   		if (seconds % 5 === 0){
   			hero.ageTamagotchi();
   		}
   	}
}

$('.btn').on('click', (e) => {
	createTamagotchi();
	$(e.currentTarget).parent().parent().parent().remove();
	gameSetup();
});

$("#action-0").on('click', (e) => {
	hero.feedTamagotchi();
	$('#stat-1').text('Hunger: ' + hero.hunger);
});