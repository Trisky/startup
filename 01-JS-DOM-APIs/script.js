$("#hideButton").click(function () {
    $("#hidden").hide();
});

$(document).ready(function () {
    $("#hidden").fadeIn();
});


$(document).ready(getData());

function getResponse() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://api.icndb.com/jokes/random', false);
    req.send(null);
    return req;
};


function setSectionResponse(){
    var req = getResponse();
    if(req.status ==200){
           // $("response").content
    }
    else{
        //set rojo TODO
    }
}
