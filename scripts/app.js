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
		this.alive = true;
		$('.container').prepend('<img id="sprite_1" src="images/defaultsprite.png" />')
	}
	feedTamagotchi(){
		if (this.hunger > 0){
			this.hunger--;
		}
	}
	sleepTamagotchi(){
		this.sleepiness = 0;
	}
	playTamagotchi(){
		if (this.boredom > 0){
			this.boredom -= 2;
		}
	}
	ageTamagotchi(){
		this.age++;
		$('#stat-0').text('Age: ' + hero.age);
	}
	die(){
		this.alive = false;
		$('#sprite_1').attr('src', 'images/graves-clipart-3.png');

	}
};

const startTime = () => {
	let timerVar = setInterval(countTimer, 1000);
	let totalSeconds = 0;
	function countTimer() {
   		++totalSeconds;
   		let hour = Math.floor(totalSeconds / 3600);
   		let minute = Math.floor((totalSeconds - hour * 3600) / 60);
  		let seconds;
  		window.seconds = totalSeconds - (hour * 3600 + minute * 60);
   		$("#timer").text(hour + ":" + minute + ":" + window.seconds);
   		if (window.seconds % 5 === 0){
   			hero.ageTamagotchi();
   		}
   		const trackHunger = () => {
			if (window.seconds % 2 === 0 && Math.floor(Math.random() * 5) + 1 === 5) {
				hero.hunger++;
				$('#stat-1').text('Hunger: ' + hero.hunger);
			}
		};

		const trackBoredom = () => {
			if (window.seconds % 3 === 0 && Math.floor(Math.random() * 3) + 1 === 3) {
				hero.boredom++;
				$('#stat-3').text('Boredom: ' + hero.boredom);
			}
		};

		const trackSleepiness = () => {
			if (window.seconds % 10 === 0) {
				hero.sleepiness++;
				$('#stat-2').text('Sleepiness: ' + hero.sleepiness);
			}
		};

		const mortalityCheck = () => {
			if (hero.hunger === 10 || hero.sleepiness === 10 || hero.boredom === 10){
				hero.die();
			}
		};
		trackHunger();
		trackBoredom();
		trackSleepiness();
		mortalityCheck();
		evolveTamagotchi();
   	}
}

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
		const $button = $('<button></button>', {id: 'action' + i})
		$button.addClass('interact');
		$('.container').append($button);
	}
	$('#action0').text('Feed');
	$('#action1').text('Nighty night!');
	$('#action2').text('Playtime');
	buttonFunction();
	moveTamagotchi();
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

$('.btn').on('click', (e) => {
	createTamagotchi();
	$(e.currentTarget).parent().parent().parent().detach();
	gameSetup();
});

const buttonFunction = () => {
	$('#action0').on('click', () => {
		hero.feedTamagotchi();
		$('#stat-1').text('Hunger: ' + hero.hunger);
	});

	$('#action1').on('click', () => {
		hero.sleepTamagotchi();
		$('.container').css('background-color', 'rgba(0,0,0,1)');
		setTimeout(function(){ $('.container').css('background-color', 'yellow'); }, 10000)
		$('#stat-2').text('Sleepiness: ' + hero.sleepiness);
	});

	$('#action2').on('click', () => {
		hero.playTamagotchi();
		$('#stat-3').text('Boredom: ' + hero.boredom);
	});
}

const evolveTamagotchi = () => {
	if (hero.age === 15 && hero.alive === true){
		$('#sprite_1').attr('src', 'images/spritelevel2.png');
	}
	if (hero.age === 30 && hero.alive === true){
		$('#sprite_1').attr('src', 'images/spritelevel3.png');
	}
}

const moveTamagotchi = () => {
	$('#sprite_1').on('click', (e) => {
		console.log('hi');
		console.log($(e.currentTarget)[0]);
		$('header').animate({fontSize: '+=5px'}, 1500);
	})
};