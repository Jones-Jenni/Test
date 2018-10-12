
var gift;
var allTheGifts = [];
function enterGifts() {
  gift = document.getElementById("gifts").value;
  allTheGifts[allTheGifts.length]=gift;
  document.getElementById("gifts").innerHTML = allTheGifts;
  document.getElementById("test").innerHTML = allTheGifts;
}


function Person(name, gender, age, wishlist) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.wishlist = wishlist;
}
    
var allThePeople = [];
function addPerson(){    
    var name = document.getElementById("name").value;
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var p = new Person(name, gender, age, allTheGifts);
    
  var pJSON = JSON.stringify(p);
  document.getElementById("test2").innerHTML = pJSON;  
  var p2 = JSON.parse(pJSON);
    document.getElementById("test3").innerHTML = p2.name;
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