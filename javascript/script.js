const listContainer = document.getElementById("list-container");

function addTask() {
  const textInput = document.getElementById("text-input");
  const textValue = textInput.value.trim();

  if (textValue.length === 0) {
    alert("You haven't written a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = textValue;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  textInput.value = "";
}
