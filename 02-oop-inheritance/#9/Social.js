class Social{
	constructor(movie){
		this.movie=movie;
	}
	like(friendName){
		console.log(friendName+" likes "+this.name);
	}
	share(friendName){
		console.log("Share "+this.name+" with "+friendName);
	}

}