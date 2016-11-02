var myApp = angular.module('mvcApp','$cookies');

// me falta bajar e importar el modulo de cookies mediante npm

var moviesController = myApp.controller('MoviesCtrl', [ '$cookies','$scope', function ($scope) {

    $scope.welcomeText = 'This is a movie list.';
    $scope.movieList = movies;

    $scope.addMovie = function () {
        var title = $scope.title;
        var duration = $scope.duration;
        var year = $scope.year;
        var newMovie = new Movie($scope.title,
            $scope.duration,
            $scope.year);
        movies.push(newMovie);
        console.log($scope.movieList);

        //now add movieList  to the cookie        
        $cookies.put('movieList', JSON.stringify(cookieMovies));
    };
}]);

// $scope.addMovie = function () {
//     var title = $scope.title;
//     var duration = $scope.duration;
//     var year = $scope.year;
//     var newMovie = Movie(title,duration,year);

//     movies.concat(newCast)
// };