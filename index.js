var gift;
var allTheGifts = [];
function enterGifts() {
  gift = document.getElementById("gifts").value;
  allTheGifts[allTheGifts.length]=gift;
  document.getElementById("giftList").innerHTML = allTheGifts;
}


function Person(name, gender, age, wishlist) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.wishlist = wishlist;
    this.combine = function(){return this.name + this.age};
}


    
var allThePeople = [];
var pJSON;
function addPerson(){    
   var name = document.getElementById("name").value;
   var gender = document.getElementById("gender").value;
   var age = document.getElementById("age").value;
   var p = new Person(name, gender, age, allTheGifts);
    
   allThePeople[allThePeople.length] = p;
   aJSON = JSON.stringify(allThePeople);
    
   localStorage.setItem("array-of-names", aJSON);
    
   clearFields();
   
   var listOfPeople = stringThroughList(allThePeople);

   document.getElementById("peopleList").innerHTML = listOfPeople;
}

function clearFields(){
   allTheGifts = [];
   document.getElementById("name").value = "";
   document.getElementById("gender").value = "";
   document.getElementById("age").value = "";
   document.getElementById("gifts").value = "";
}

function stringThroughList(list){
    var i, listOfPeople = "";
    var len = list.length;
    for(i = 0; i < len; i++) {
        listOfPeople += "<li>" + list[i].name + ", " + list[i].gender + ", " + list[i].age + ", " + list[i].wishlist + "</li>"; 
    }
    return listOfPeople;
    
}


function getList(){
    var pArray = JSON.parse(localStorage.getItem("array-of-names"));
    
    document.getElementById("test6").innerHTML = stringThroughList(pArray);
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