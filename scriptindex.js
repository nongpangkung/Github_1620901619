let requestURL = 'topicpost.json';
let request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

function dataReportStatus(data) {

    /*Watch Modal*/

    let recom = "";
    for (var i = 0; i < 5; i++) {
        recom += '<div id="poster" class="col-2 float-left"><img src="' + data[i].title_logo + '" height="400px;" width="90%;" style="margin-left:6%;">';
        recom += '<h6><b>' + data[i].title_food + '</b></h6>';
        recom += '<h6>' + data[i].status + '</h6>';
        recom += '</div>';
    }
    document.querySelector("#col-recom1").innerHTML += recom;
    
    recom = "";
    for(var i=5; i<10; i++){
        recom += '<div id="poster" class="col-2 float-left"><img src="'+ data[i].title_logo +'" height="400px;" width="90%;" style="margin-left:6%;">';
		recom += '<h6><b>' + data[i].title_food + '</b></h6>';
		recom += '<h6>' + data[i].status + '</h6>';
		recom += '</div>'; 
    }
    document.querySelector("#col-recom2").innerHTML += recom;  
    }


