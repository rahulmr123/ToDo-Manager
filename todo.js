var todoHolder = document.getElementById("todo_holder");
var addButton = document.getElementById("addButtonTask");
var textInput = document.getElementById("input_text");

var createNewTaskElement = function(){

var listItem = document.createElement("li");
var editInput = document.createElement("input");
editInput.type = "text";
editInput.value = textInput.value;

listItem.appendChild(editInput);
return listItem;


}










var addTask = function(){


var listItem = createNewTaskElement();
todo_holder.appendChild(listItem);
textInput.value='';



//alert("button-clicked");

}





addButton.addEventListener("click",addTask);
alert("dfcdc");







