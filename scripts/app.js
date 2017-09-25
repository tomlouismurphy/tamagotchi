class Tamagotchi {
	constructor(name, favoriteFoods, ){
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
};

const gameSetup = () => {
	for (let i = 0; i < 4; i++){
		const $p = $('<p></p>', {id: 'stat-' + i})
		$p.addClass('stats');
		$('.container').append($p);
	}
	$('#stat-0').text('Age: ' + 0);
	$('#stat-1').text('Hunger: ' + 0);
	$('#stat-2').text('Sleepiness: ' + 0);
	$('#stat-3').text('Boredom: ' + 0);
	for (let i = 0; i < 3; i++){
		const $button = $('<button></button>', {id: 'action-' + i})
		$button.addClass('interact');
		$('.container').append($button);
	}
	$('#action-0').text('Feed the beast');
	$('#action-1').text('Nighty night!');
	$('#action-2').text('Playtime');
};