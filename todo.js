var todoHolder = document.getElementById("todo_holder");
var addButton = document.getElementById("addButtonTask");
var textInput = document.getElementById("input_text");
var i = 0;
var createNewTaskElement = function () {

  var listItem = document.createElement("li");
  listItem.setAttribute("draggable", "true");
  listItem.setAttribute("ondragstart", "dragStart_handler(event)");
  listItem.setAttribute("id", "todo_cards" + i++);
  var editInput = document.createElement("input");
  var deleButton = document.createElement("button");
  editInput.type = "text";
  editInput.value = textInput.value;
  deleButton.innerText = "delete";
  editInput.style = "width:70%;text-align:center;font-family: 'Baloo Bhaijaan', cursive;";
  deleButton.style = "border-radius: 4px;text-decoration: none;border: none;color: white;background-color:#01579b";
  deleButton.setAttribute("id", "delbutton");
  deleButton.className = "delete";
  listItem.appendChild(editInput);
  listItem.appendChild(deleButton);
  var id1 = "li_items" + i;
  localStorage.setItem("id1", listItem);
  return listItem;


}

function dragStart_handler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dropEffect = "move";
}

function dragover_handler(ev) {
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}

function drop_handler(ev) {

  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  ev.preventDefault();
}


var addTask = function () {

  if (textInput.value == '') {
    alert("cant be empty");
  }
  else {
    var listItem = createNewTaskElement();
    //var l = localStorage.getItem("li_items"+i);
    todo_holder.appendChild(listItem);
    textInput.value = '';
    bindEvent(listItem);

  }
  //alert("button-clicked");

}
var delTask = function () {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);


}


var bindEvent = function (listItem) {
  var deleButton = listItem.querySelector("button.delete");
  deleButton.addEventListener("click", delTask);

}

addButton.addEventListener("click", addTask);
//alert("dfcdc");







