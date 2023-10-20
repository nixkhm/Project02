/* TODO:  Add error states for incomplete form data  */

function addTask(form) {
  /* Deriving task data from HTML Form */
  const taskTitle = form.taskTitle.value;
  const taskPriority = form.taskPriority.value;
  const taskStatus = form.querySelector(
    'input[name="taskStatus"]:checked'
  ).value;

  /* <ul> to hold To Do List Items */
  const taskList = document.getElementById("task-list");

  /* Bootstrap div with classes for card */
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("text-center");
  card.classList.add("mb-3");

  /* Bootstrap div with classes for card body */
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  if (taskPriority === "Low") cardBody.style.background = "green";
  else if (taskPriority === "Medium") cardBody.style.background = "orange";
  else cardBody.style.background = "red";

  /* Title for task to be displayed on card */
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-body");
  cardTitle.textContent = `Task Title: ${taskTitle}`;

  /* <p> to hold both Task data */
  const taskDisplay = document.createElement("p");
  taskDisplay.textContent = `Priority: ${taskPriority} ; Status: ${taskStatus}`;

  /* <a> to complete task */
  const completeButton = document.createElement("a");
  completeButton.classList.add("btn");
  completeButton.classList.add("btn-primary");
  completeButton.textContent = "Task Completed";

  /* <a> to delete task */
  const deleteButton = document.createElement("a");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-primary");
  deleteButton.textContent = "Delete Task";

  /* event listener to mark as task as complete */
  let isCompleted = false;
  completeButton.addEventListener("click", () => {
    if (isCompleted) {
      cardTitle.style.textDecoration = "none";
      taskDisplay.style.textDecoration = "none";
      completeButton.textContent = "Task Completed";
    } else {
      cardTitle.style.textDecoration = "line-through";
      taskDisplay.style.textDecoration = "line-through";
      completeButton.textContent = "Undo Completion";
    }
    isCompleted = !isCompleted;
    event.preventDefault();
  });

  /* event listener to update array when task deleted */
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(newTask);
    event.preventDefault();
  });

  /* If a task is added as completed, strick through and set isCompleted to true */
  if (taskStatus === "Completed") {
    isCompleted = true;
    cardTitle.style.textDecoration = "line-through";
    taskDisplay.style.textDecoration = "line-through";
    completeButton.textContent = "Undo Completion";
  }

  /* Creating a new <li> for new task*/
  const newTask = document.createElement("li");

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(taskDisplay);
  cardBody.append(completeButton);
  cardBody.appendChild(deleteButton);

  card.append(cardBody);
  newTask.appendChild(card);
  taskList.append(newTask);

  event.preventDefault();

  /* Reset fields in form */
  /* TODO: Find a better way to reset fields for radio button input */
  form.taskTitle.value = "";
  form.taskPriority.value = "Low";
}
