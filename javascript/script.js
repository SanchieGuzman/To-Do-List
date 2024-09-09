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
  save();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      save();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      save();
    }
  },
  false
);

function save() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
