class Movie{
	constructor(name,year, duration){
		this.name=name;
		this.year=year;
		this.duration=duration;
		this.cast= new Array;
	}
	play(){
		this.func('play');
	};
	pause(){
		console.log("The movie is paused");
	};
	resume(){
		console.log("The movie is back on track");
	};
	addCast(actor){
		if(Array.isArray(actor)){
			for (var i = actor.length - 1; i >= 0; i--) {
				this.cast[this.cast.length]=actor[i];
			}
		}
		else{
			this.cast[this.cast.length]=actor;
		}
	};
	
};