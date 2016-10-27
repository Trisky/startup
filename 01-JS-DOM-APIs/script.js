function printResponse(funcion) {
    var data = funcion();
};

function getRepo(elRepo) {
    $("ul").empty();
    var url = ' https://api.github.com/search/repositories';
    $.getJSON(url, { q: elRepo })

        .done(function (response) {
            console.log(response);
            var items = response.items;

            $.each(items, function (i, item) {
                $("#repoList").append('<li>' + item.full_name + '</li>');

            });
        })
        .fail(function () {
            console.log("error");
            $("#repoList").css('background-color', 'red');
            $("#repoList").append('<li>' + "ERROR" + '</li>');
        })
};

function getJoke() {
    var url = 'http://api.icndb.com/jokes/random'
    $.getJSON(url).done(function (response) {
        console.log(response.value);
        var joke = response.value.joke
        $("#response").css('background-color', 'lightgreen');
        $("#response").html(joke);
    })
        .fail(function () {
            console.log("error"+ response);
            $("#response").css('background-color', 'red');
        })
};

function getThisRepo() {
    var repoName = $("repoName").val();
    getRepo(repoName);
};


$(document).ready(function () {
    $("#hidden").fadeIn();    

    $("#hideButton").click(function () {
        $("#hidden").fadeOut();
    });

    $("#getJoke").click(getJoke());
    $("#getRepo").click(getRepo("JavaScript"));
    $("#getThisRepo").click(getThisRepo());
});