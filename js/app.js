const modalForm = document.querySelector("#modal__form");
const btnAddTask = document.querySelector("#add-task");
const btnCloseModal = document.querySelector("#close-modal");
const taskContainer = document.querySelector("#task-container");

const formTask = document.querySelector("#form-task");
const taskInput = document.querySelector("#task-input");
const templateTask = document.querySelector("#template-task");

//console.log(taskContainer);

let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
//console.log(tasks);

tasks.forEach(function (task) {
  renderTask(task);
});

// Open Modal //

btnAddTask.addEventListener("click", () => {
  modalForm.showModal();
  modalForm.querySelector("input").focus();
});

// Close Mosal Event //

btnCloseModal.addEventListener("click", closeModal);

//Close Modal //

function closeModal() {
  //console.log(modalForm);
  modalForm.style.animation = "fade .3s forwards";

  modalForm.addEventListener(
    "animationend",
    function (e) {
      modalForm.style.animation = "";
      modalForm.close();
    },
    {
      once: true,
    }
  );
}

// Add Tasks//

formTask.addEventListener("submit", function (event) {
  event.preventDefault();
  const currentValueInput = taskInput.value.trim();
  //console.log(currentValueInput);

  if (currentValueInput.length > 3) {
    const newTask = createTask(currentValueInput);
    //console.log(newTask);
    renderTask(newTask);

    formTask.reset();
    closeModal();

    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});

taskContainer.addEventListener("input", function (e) {
  const currentTask = e.target.closest(".tasks__item");

  console.log(currentTask);
});

// create Tasks //

function createTask(tasName) {
  return {
    name: tasName,
    complete: false,
    id: new Date().getTime(),
  };
}

//  Render Tasks //

function renderTask(task) {
  const { name, complete: state, id } = task;
  const taskTemplate = templateTask.content.cloneNode(true);

  if (state) {
    taskTemplate.querySelector(".tasks__item").dataset.state = "complete";
    taskTemplate.querySelector(".tasks__checked").checked = true;
  } else {
    taskTemplate.querySelector(".tasks__item").dataset.state = "incomplete";
    taskTemplate.querySelector(".tasks__name").contentEditable = true;
  }

  taskTemplate.querySelector(".tasks__name").textContent = name;
  taskTemplate.querySelector(".tasks__item").id = id;

  taskContainer.prepend(taskTemplate);
}

// get a task by id //
function getTaskById(id) {
  const currentId = parseInt(id);

  return tasks.filter((task) => task.id === currentId);
}

console.log(getTaskById(19.6));
