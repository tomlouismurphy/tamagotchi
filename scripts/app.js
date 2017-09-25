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
}