var myXHR = new XMLHttpRequest();

var MyPersons= {
    "firstname" : "xxx",
    "lastname" : "yyy"
};

myXHR.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200) {

        MyPersons = JSON.parse(this.responseText);
        PrintData();
    }
};

myXHR.open("GET", "/data/jsondata.json", true); //Prepping for action!

myXHR.send(); //Action!

function PrintData(){

    var htmldata = "";
    var i;
    for (i =0; i<MyPersons.length; i++) {

        htmldata += "<li>" + MyPersons[i].firstname + "</li>";

    }

    document.getElementById("result").innerHTML = htmldata;
}