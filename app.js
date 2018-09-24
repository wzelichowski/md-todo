const form = document.querySelector('#task-form');
const taskList = document.querySelector('.task-list');
const clearTasks = document.querySelector('.clear-tasks');
const removeLast = document.querySelector('.remove-last');
const taskTitle= document.querySelector('#task-title');
const taskDesc = document.querySelector('#task-desc');

loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask);
  removeLast.addEventListener('click', removeLastTask);
  clearTasks.addEventListener('click', clearAllTasks);
}

// add task
function addTask(e) {
  let taskLength = taskTitle.value.length;
  let descLength = taskDesc.value.length;
  if(taskTitle.value === '') {
    alert('Sorry! Title is required!');
  } else if (taskLength < 10 || taskLength > 255) {
    alert('Try get your task name between 10 or 255 characters');
  } else if(descLength > 255) {
    alert('Sorry! Description should be shorter than 255 characters.')
  } else {
    const li = document.createElement('li');
    li.className = 'task-item';
    if(descLength > 0) {
      li.appendChild(document.createTextNode(`${taskTitle.value} - ${taskDesc.value}`));
    } else {
      li.appendChild(document.createTextNode(`${taskTitle.value}`));
    }
    taskList.appendChild(li);
    taskTitle.value = '';
    e.preventDefault();
  }
  
}

function removeLastTask() {
  taskList.removeChild(taskList.lastChild);
}

function clearAllTasks() {
  taskList.innerHTML = '';
}