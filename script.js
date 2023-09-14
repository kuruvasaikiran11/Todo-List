
let input = document.getElementById("task");
let addButton = document.getElementById("add-btn");
let listItems = document.getElementById("list-items");

let taskList = JSON.parse(localStorage.getItem("taskList"));
console.log(taskList);
document.addEventListener("DOMContentLoaded", function(){
    if(taskList === null){
        taskList = [];
    }else{
        for(let i = 0; i < taskList.length; i++){
            addTask(taskList[i]);
        }
    }
})

addButton.addEventListener("click", function(){
    // console.log(input.value);
    const task = input.value;
    addTask(task);
    taskList.push(task);
    localStorage.setItem("taskList", JSON.stringify(taskList));
})

function addTask(task){
    listItems.innerHTML += `<li>${task}</li>`;    
    input.value = "";
    input.focus();
}

