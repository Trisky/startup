var movies= [
    new Movie("title1", 2001, 101),
    new Movie("title2", 2002, 102),
    new Movie("title3", 2003, 103),
    new Movie("title4", 2004, 104)
    ];

function Movie(title, year, duration) {

    this.title = title;
    this.year = year;
    this.duration = duration;
};
console.log("Default movies created ")