
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