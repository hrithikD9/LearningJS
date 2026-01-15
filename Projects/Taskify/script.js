const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const allCol = [todo, progress, done];
let dropTask = null;
let taskData = {};

function checkUserName() {
  const uName = localStorage.getItem("username");
  const name = document.querySelector("#username");

  if (!uName) {
    const username = prompt("Enter your name");
    localStorage.setItem("username", username);
    name.innerText = username;
  } else {
    name.innerText = uName;
  }
}

function addTask(title, desc, column) {
  const div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("draggable", "true");

  div.innerHTML = `
   <h2>${title}</h2>
   <p>${desc}</p>
   <button>Delete</button>
  `;
  column.appendChild(div);

  div.addEventListener("drag", (e) => {
    dropTask = div;
  });

  const deleteButton = div.querySelector("button");
  deleteButton.addEventListener("click", () => {
    div.remove();
    updateTaskCount();
  });
  return div;
}

function updateTaskCount() {
  allCol.forEach((col) => {
    // the existing columns
    const tasks = col.querySelectorAll(".task");
    const count = col.querySelector(".right");

    taskData[col.id] = Array.from(tasks).map((t) => {
      return {
        title: t.querySelector("h2").innerText,
        desc: t.querySelector("p").innerText,
      };
    });

    localStorage.setItem("tasks", JSON.stringify(taskData)); // saving the data in localStorage
    count.innerText = tasks.length; // updating the count in each column
  });
}

if (localStorage.getItem("tasks")) {
  const data = JSON.parse(localStorage.getItem("tasks"));

  for (const col in data) {
    const column = document.querySelector(`#${col}`); // stored a dom element
    data[col].forEach((task) => {
      // iterating actual task
      addTask(task.title, task.desc, column); // calling addTask Function
    });
  }
  updateTaskCount();
}

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    // console.log(e)
    dropTask = task;
  });
});

function addDragEventColumn(column) {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });

  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("hover-over");
  });

  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  column.addEventListener("drop", (e) => {
    // console.log(dropTask)
    e.preventDefault();

    column.appendChild(dropTask);
    column.classList.remove("hover-over");

    //updateTaskCOunt
    updateTaskCount();
  });
}

addDragEventColumn(todo);
addDragEventColumn(progress);
addDragEventColumn(done);

// modal part

const toggleModalButton = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const modalBG = document.querySelector(".modal .bg");
const addTaskButton = document.querySelector("#add-new-task");

toggleModalButton.addEventListener("click", (e) => {
  modal.classList.add("active");
});

modalBG.addEventListener("click", (e) => {
  modal.classList.remove("active");
});

addTaskButton.addEventListener("click", (e) => {
  const taskTitle = document.querySelector("#task-title").value;
  const taskDesc = document.querySelector("#task-desc").value;

  addTask(taskTitle, taskDesc, todo);
  updateTaskCount();
  modal.classList.remove("active");

  document.querySelector("#task-title").value = "";
  document.querySelector("#task-desc").value = "";
});
