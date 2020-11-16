//JSON, what?
//Vad är skillnaden på JSON vs JavaScript Objects?
//eller vad är skillnaden på detta och ett c# object?

//JSON har en syntax baserad på {} och []
//JavaScript object har en syntax baserad på KEY/VALUE Pairs

var person = {
        "firstname" : "Arne",
        "lastname" : "Anka"
}

console.log(person);
console.log(person.firstname);

//
var persons = 
`
[{
    "firstname" : "Kalle",
    "lastname" : "Anka"
},
{
    "firstname" : "Musse",
    "lastname" : "Pigg"
}]
`

console.log(JSON.parse(persons));
//console.log(JSON.parse(persons[0].lastname));

var myPersons = JSON.parse(persons);
console.log(myPersons[0].firstname);

//Om man vill gå åt andra hållet, dvs omvandla JavaScript Object till JSON
var jsonData = JSON.stringify(person);
console.log(jsonData);
console.log(jsonData.firstname);