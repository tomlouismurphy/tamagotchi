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
		for (let i = 0; i < 4; i++){
			const $p = $('<p></p>', {id: 'stat-' + i})
			$p.addClass('stats');
			$('.container').append($p);
		}
		$('#stat-0').text('Age: ' + this.age);
		$('#stat-1').text('Hunger: ' + this.hunger);
		$('#stat-2').text('Sleepiness: ' + this.sleepiness);
		$('#stat-3').text('Boredom: ' + this.boredom);
	}
}

