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
  var editbutton = document.createElement("button");
  var status = document.createElement("p");
  status.innerText ="todo";
  editInput.type = "text";
  editInput.readOnly = "true";
  editInput.readOnly = 'true';
  editInput.value = textInput.value;
  status.style = "text-align:center";
  editInput.setAttribute("id","editInput");
  deleButton.innerText = "delete";
  editInput.style = "width:100%;text-align:center;font-family: 'Baloo Bhaijaan', cursive;";
  deleButton.style = "border-radius: 4px;text-decoration: none;border: none;color: white;background-color:#01579b;margin-bottom:1px";
  deleButton.setAttribute("id", "delbutton");
  deleButton.className = "delete";
  editbutton.innerText = "edit";
  editbutton.setAttribute("id","editButton");
  editbutton.className = "edit";
  editbutton.style = "border-radius: 4px;text-decoration: none;border: none;color: white;background-color:#01579b";
  
  listItem.appendChild(editInput);
  listItem.appendChild(deleButton);
  listItem.appendChild(editbutton);
  listItem.appendChild(status);
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

function drop_handler(ev,el) {

  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData("text");
  el.appendChild(document.getElementById(data));
  
  
 if(ev.target.id == "target"){
  var listItem = document.getElementById(data);
    var pText = listItem.querySelector("p");
    pText.innerText = "inprogress";
    
 }
 if(ev.target.id == "target2"){
  var listItem = document.getElementById(data);
    var pText = listItem.querySelector("p");
    pText.innerText = "Inreview";
    
 }
 if(ev.target.id == "target3"){
  var listItem = document.getElementById(data);
    var pText = listItem.querySelector("p");
    pText.innerText = "Done";
    
 }
 if(ev.target.id == "todo_holder"){
  var listItem = document.getElementById(data);
    var pText = listItem.querySelector("p");
    pText.innerText = "todo";
    
 }
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
var editTask = function (){
  var listItem =this.parentNode;
  var editInput = listItem.firstChild;
 editInput.removeAttribute('readOnly');
 
}


var bindEvent = function (listItem) {
  var deleButton = listItem.querySelector("button.delete");
  var editbutton = listItem.querySelector("button.edit");
  deleButton.addEventListener("click", delTask);
  editbutton.addEventListener("click",editTask);
  
}

addButton.addEventListener("click", addTask);
//alert("dfcdc");







