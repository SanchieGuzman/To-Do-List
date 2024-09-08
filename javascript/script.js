const textInput = document.getElementById("text-input");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (textInput === "") {
    alert("You haven't written a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = textInput.value;
    listContainer.appendChild(li);
  }
  textInput.value = "";
}
