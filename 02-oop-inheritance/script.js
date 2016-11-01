"use strict";
var event = new Event('build');

EventEmitter.call(Movie.prototype);
var e = new EventEmitter();


function Movie(title, year, duration) {

    this.title = title;
    this.year = year;
    this.duration = duration;
    

    this.play = function play() { this.emmit("play event has been emitted") };
    this.pause = function pause() { this.emmit("pause") };
    this.resume = function resume() { this.emmit("resume") };


    //#7
    this.cast = [];
    this.addCast = function (newCast) {
        this.cast= this.cast.concat(newCast)
    };
    this.showcast = function () {
        console.log(this.cast)
    };
};


function EventEmitter() {

    this.on = function () {
        console.log("on");
    }
    this.emmit = function (mensaje) {
        console.log(mensaje);
    }
    this.off = function () {
        console.log("off");
    }
}

function Logger() {
    this.log = function (data) {
        console.log(data);
    }
}

function Actor(name, age) {
    this.name = name;
    this.age = age;
};


//6th

function Social() {
    this.share = function (friendName) {
        console.log(friendName + " shared " + this.title)

    }
    this.like = function (friendName) {
        console.log(friendName + " likes " + this.title)

    }
}
Social.call(Movie.prototype);


//7
function Actor() {
    this.name;
    this.age;
}
//execution--->>>>

//#4
var movie1 = new Movie("title1", 2012, 60);
var movie2 = new Movie("title2", 1042, 120);
movie1.emmit("play");

//#5
console.log("punto 5-->")
var logger = new Logger();
movie2.on('play', logger.log);
movie2.play();

//#6
console.log("punto 6-->");
var s = new Social();
movie1.share("carlos");
movie2.like("john");

//#7

var corona = new Actor('jorge Corona', 99);

//#8
var cast = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];
movie1.addCast(cast);
movie1.showcast();