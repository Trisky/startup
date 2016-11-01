class Actor {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}
class EventEmitter {
	constructor(listener, func) {
		this.listener = listener;
		this.func = func;
	}
	on(e, _callback) {
		this.listener = e;
		this.func = _callback;
	}
	emit(event) {
		if (event == this.listener) this.func();
	}
	off() {
		this.func = null;
		this.listener = null;
	}
}
class Logger {
	constructor() {}
	log(info) {
		console.log(info);
	}
}
class Movie {
	constructor(name, year, duration) {
		this.name = name;
		this.year = year;
		this.duration = duration;
		this.cast = new Array();
	}
	play() {
		this.func('play');
	}
	pause() {
		console.log("The movie is paused");
	}
	resume() {
		console.log("The movie is back on track");
	}
	addCast(actor) {
		if (Array.isArray(actor)) {
			for (var i = actor.length - 1; i >= 0; i--) {
				this.cast[this.cast.length] = actor[i];
			}
		} else {
			this.cast[this.cast.length] = actor;
		}
	}
};

class Social {
	constructor(movie) {
		this.movie = movie;
	}
	like(friendName) {
		console.log(friendName + " likes " + this.name);
	}
	share(friendName) {
		console.log("Share " + this.name + " with " + friendName);
	}

}
