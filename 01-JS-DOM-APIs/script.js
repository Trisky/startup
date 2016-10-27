$(document).ready(function () {
    $("#hidden").fadeIn();

    $("#hideButton").click(function () {
        $("#hidden").fadeOut();
    });

    $("#getJoke").click(function () { getJoke() });
    $("#getRepo").click(function () { getRepo("JavaScript") });
    $("#getThisRepo").click(function () { getThisRepo() });
    $("#showMatrix").click(function () { addMatrixSection() });
});

function getRepo(elRepo) {
    $("ul").empty();
    var url = ' https://api.github.com/search/repositories';
    $.getJSON(url, { q: elRepo })

        .done(function (response) {
            console.log(response);
            var items = response.items;
            $("#repoList").css('background-color', 'lightblue');
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
            console.log("error" + response);
            $("#response").css('background-color', 'red');
        })
};

function getThisRepo() {
    var repoName = $("#repoName").val();
    getRepo(repoName);

};

function createMatrix() {
    return items = [
        [1, 2, 99],
        [3, 4, 98],
        [5, 6, 97]
    ];
}

function matrixToDOM() {

    var matrix = createMatrix();
    var domMatrix = populateDOMMatrix(matrix);
    var matrixSection = document.getElementById("matrixSection");

    matrixSection.appendChild(domMatrix);
}

//FUNCTION 12
function populateDOMMatrix(matrix) {

    var matrixDOM = document.createElement("ul");

    matrix.forEach(function (row) {
        var li = document.createElement("li");
        var textnode = document.createTextNode(" | ");
        li.appendChild(textnode);
        row.forEach(function (element) {
            var textnode = document.createTextNode(element + " | ");
            li.appendChild(textnode);
        });
        matrixDOM.appendChild(li);
    });
    return matrixDOM;
}

function addMatrixSection() {
    var newSection = document.getElementById("matrixSection");
    if (newSection != null) {
        matrixSection.parentElement.removeChild(matrixSection);
    }

    var newSection = document.createElement("section");
    newSection.id = "matrixSection";
    var newContent = document.createTextNode("This is a nice table to show:");
    newSection.appendChild(newContent);
    var master = document.getElementById("middleColumn");
    var lastSection = document.getElementById("repoSection");
    master.insertBefore(newSection, lastSection);
    matrixToDOM();
}


