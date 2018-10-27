var gift;
var allTheGifts = [];
function enterGifts() {
  gift = document.getElementById("gifts").value;
  allTheGifts[allTheGifts.length]=gift;
  document.getElementById("giftList").innerHTML = allTheGifts;
  enteredGifts();
}

function needToEnterGifts(){
  document.getElementById("giftButton").className = "buttonColor1";  
}

function enteredGifts(){
  document.getElementById("giftButton").className = "buttonColor2";   
}

//Object prototype/creation function/properities/method/instatiated objects will inherit these //properties and methods.
function Person(name, gender, age, wishlist) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.wishlist = wishlist; 
    this.combine = function(){
      return (this.name + ", " + this.age + ", " + this.wishlist);   
    };
}


    
var allThePeople = [];
var pJSON;
function addPerson(){    
   var name = document.getElementById("name").value;
   var gender = document.getElementById("gender").value;
   var age = document.getElementById("age").value;
   //created new object p using Person object prototype/instantiation/inheritance
    var p = new Person(name, gender, age, allTheGifts);
    
   //added the new object to an array of objects that will be sent to another page via JSON
   allThePeople[allThePeople.length] = p;
   //JSON stringify
   aJSON = JSON.stringify(allThePeople);
   //Stored array of objects turned into JSON in local storage so it could be retrieved later
   localStorage.setItem("array-of-names", aJSON);
    
   clearFields();
   
   var listOfPeople = stringThroughList(allThePeople);
   //displayed list of people on screen so user can see
   document.getElementById("peopleList").innerHTML = listOfPeople;  
}

//Clear the fields to make it nice for user
function clearFields(){
   allTheGifts = [];
   document.getElementById("name").value = "";
   document.getElementById("gender").value = "";
   document.getElementById("age").value = "";
   document.getElementById("gifts").value = "";
}

//loop through array to get list info for display
function stringThroughList(list){
    var i, listOfPeople = "";
    var len = list.length;
    for(i = 0; i < len; i++) {
        listOfPeople += "<li>" + list[i].name + ":  " + list[i].wishlist + "</li>"; 
    }
    return listOfPeople;
    
}

//Local Storage, storing and retriving simple data, arrays, objects
function getList(){
    //JSON parse, parsed JSON string of an array of objects
    var pArray = JSON.parse(localStorage.getItem("array-of-names"));
    
    document.getElementById("giftList").innerHTML = stringThroughList(pArray);
}


//variable
var pet;
//array
var allThePets = [];
//function    
function enterPets() {
  pet = document.getElementById("pets").value;
  //variable and array
  allThePets[allThePets.length]=pet;
  document.getElementById("enteredPets").innerHTML = allThePets;
}
//function and paramenters    
function boardingCost(pet) {
   //variable and conditional statment
   var cost;
   switch(pet) {
      case "dog":
         cost = 30
         break;
      case "Dog":
         cost = 30
         break;
      case "cat":
         cost = 25
         break;
      case "Cat":
         cost = 25
         break;
      case "bird":
         cost = 20
         break;
      case "Bird":
         cost = 20
         break;
      default:
          cost = 20
    }
    return cost;
}
//function and parameters   
function listCost(arr){
    var allThePetsCost = "<ul>";
    //loopm array, variable
    for (i = 0; i < arr.length; i++) {
        allThePetsCost += "<li>" + arr[i] + ": $" + boardingCost(arr[i]) + "</li>";
    }
    allThePetsCost += "<ul>";
    document.getElementById("costForEachPet").innerHTML = allThePetsCost;
}