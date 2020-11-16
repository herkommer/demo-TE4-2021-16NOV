var myXHR = new XMLHttpRequest();

myXHR.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("result").innerHTML = myXHR.responseText;
    }
};

myXHR.open("GET", "/data/pelle.txt", true); //Prepping for action!

myXHR.send(); //Action!

//väntar på att något nu händer...??
//object har en känsla för vad som händer
//vi kan berätta hur den ska tolka sina känslor
//EVENT HANDLING, livscykel...