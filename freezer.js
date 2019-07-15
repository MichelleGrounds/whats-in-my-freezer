var freezerContents = [] //empty array for items to be added to
var list = "";

// document.addEventListener("DOMContentLoaded", function(event) {
// });

function addItemToFreezer() {
  const itemToAdd = document.getElementById('item_input').value;
  freezerContents.push({
    item: itemToAdd,
    number: 1, // once i have my dropdown menu this will be a parameter
    id: Math.random()
  });
  freezerContents.sort();
  document.getElementById('item_input').value='';
}

function createList() {
  //create the list element
  list = document.createElement('div');
  for (var i = 0; i < freezerContents.length; i++) {
    //create the list item
    var listNumber = document.createElement('div');
    var listItem = document.createElement('div');
    var row = document.createElement('div');
    var minusButton = document.createElement('div');
    var plusButton = document.createElement('div');

    // create ids
    minusButton.id = freezerContents[i].id;
    plusButton.id = freezerContents[i].id;

    // add classes
    row.className="freezerRow";
    minusButton.className="fa fa-minus freezerButton";
    plusButton.className="fa fa-plus freezerButton";

    //set its contents
    listNumber.appendChild(document.createTextNode(freezerContents[i].number));
    listItem.appendChild(document.createTextNode(freezerContents[i].item));

    //add it to the list
    row.appendChild(listNumber)
    row.appendChild(listItem);
    row.appendChild(minusButton);
    row.appendChild(plusButton);
    list.appendChild(row);
  };
};

function writeListToHtml() {
  document.getElementById("freezer").innerHTML = list.innerHTML;
}

function onClickHandling(eventInfo, buttonType) {
  if (buttonType == "plus") {
    for (var i = 0; i < freezerContents.length; i++) {
      if (freezerContents[i].id == eventInfo.target.id){
        freezerContents[i].number++;
      }
    }
  }
  if (buttonType == "minus") {
    for (var i = 0; i < freezerContents.length; i++) {
      if (freezerContents[i].id == eventInfo.target.id){
        freezerContents[i].number--;
        if(freezerContents[i].number <= 0) {
          freezerContents.splice(i, 1);
        }
        //delete if the number is already 1
      }
    }
  }
  redraw();
};

function addOnClicks() {
  var plusButtonClick = document.getElementsByClassName("fa-plus");
  var minusButtonClick = document.getElementsByClassName("fa-minus");

  for (var i = 0; i < plusButtonClick.length; i++) {
    plusButtonClick[i].onclick = function(event) { onClickHandling(event, "plus");}
  }
  for (var i = 0; i < minusButtonClick.length; i++) {
    minusButtonClick[i].onclick = function(event) { onClickHandling(event, "minus");}
  }
}

function redraw() {
  createList();
  writeListToHtml();
  addOnClicks();
}

function generateFreezer() {
  addItemToFreezer();
  redraw();
}





//
//
//
//
// addItemToFreezer(item, number)
//
// freezerContents: [
//   {item: ice cream,
//   number: 2},
//   {item: pizza,
//   number: 1}
// ]
// //
// // when pressing plus: add one to number
// // when pressing minus: deduct the number, if number was 1 delete item
//when cycling through the whole list: if the entered value is already there just add plus one
//
//
