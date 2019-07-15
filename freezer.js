var freezerContents = [] //empty array for items to be added to
var list = "";

// document.addEventListener("DOMContentLoaded", function(event) {
// });

function addItemToFreezer() {
  const itemToAdd = document.getElementById('item_input').value;
  freezerContents.push(itemToAdd);
  freezerContents.sort();
  document.getElementById('item_input').value='';
}

function createList() {
      //create the list element:
  list = document.createElement('ul');
  for (var i = 0; i < freezerContents.length; i++) {
      //create the list item
    var listItem = document.createElement('li');
      //set its contents
    listItem.appendChild(document.createTextNode(freezerContents[i]));
      //add it to the list
    list.appendChild(listItem);
  };
};

function writeListToHtml() {
  document.getElementById("freezer").innerHTML = list.innerHTML;
}

function generateFreezer() {
  addItemToFreezer();
  createList();
  writeListToHtml();
}
