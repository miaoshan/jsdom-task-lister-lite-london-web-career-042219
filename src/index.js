//document.addEventListener("submit", () => {
  //const inputEl=document.querySelector('#new-task-description');

//});

let taskForm = document.querySelector('#create-task-form');  // step1: find all elements will work on later, assign variables
let taskDes = document.querySelector('#new-task-description'); // form has submit, so select the form. add task to input tag, so
let taskList = document.querySelector('#tasks');              // select input id=new-task-description. as we want to add list to
                                                             // todo list, id=tasks.

function addTask(event){                    // write function to create li tag.
  event.preventDefault();  // prevent page from reloading
//  debugger
  let newTask = document.createElement("li");
  newTask.innerText = taskDes.value;    // get value of input box of new-task-description.
  taskList.appendChild(newTask);        // insert li tag to ul tag.
}

taskForm.addEventListener("submit", addTask);  //addTask() without argument, is because 'submit' is the event. so no need to write addTask().