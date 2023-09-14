// let input = document.getElementById("task");
// let addButton = document.getElementById("add-btn");
// let listItems = document.getElementById("list-items");

// let taskList = JSON.parse(localStorage.getItem("taskList"));
// // console.log(taskList);
// let count = 0;
// document.addEventListener("DOMContentLoaded", function(){
//     if(taskList === null){
//         taskList = [];
//     }else{
//         for(let i = 0; i < taskList.length; i++){
//             Object.entries(taskList[i]).forEach(([key, value]) => {
//                 // console.log(key, value)
//                 addTask(key, value);
//             })
//         }
//     }

//     addButton.addEventListener("click", function(){
//         // console.log(input.value);
//         const task = input.value;
//         count++
//         const listItem = {};
//         listItem[count] = task;
//         addTask(count, task);
//         taskList.push(listItem);
//         localStorage.setItem("taskList", JSON.stringify(taskList));
//         input.value = "";
//         input.focus();
//         // location.reload();
//         let removeItems = document.getElementsByClassName("del-btn");
//         for (let i = 0; i < removeItems.length; i++) {
//             removeItems[i].addEventListener("click", function (event) {
//                 const liElement = event.target.closest("li");
//                 // console.log(liElement.id);
//                 let id = liElement.id;
//                 remove(id);
//                 liElement.remove();
//             });
//         }
        
//         function remove(id){
//             taskList = taskList.filter(obj => Object.keys(obj)[0] !== id);
//             localStorage.setItem("taskList", JSON.stringify(taskList));
//         }
//     })
    
//     function addTask(count, task){
//         listItems.innerHTML += `<li id=${count}><p>${task}</p><i class="fa-solid fa-trash del-btn"></i></li>`;    
//     }
    
// })

let input = document.getElementById("task");
let addButton = document.getElementById("add-btn");
let listItems = document.getElementById("list-items");

let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
let count = parseInt(localStorage.getItem("count")) || 0; // Retrieve the count from local storage

document.addEventListener("DOMContentLoaded", function(){
    if(taskList === null){
        taskList = [];
    }else{
        for(let i = 0; i < taskList.length; i++){
            Object.entries(taskList[i]).forEach(([key, value]) => {
                // console.log(key, value)
                addTask(key, value);
            })
        }
    }

    addButton.addEventListener("click", function(){
        // console.log(input.value);
        const task = input.value;
        const listItem = {};
        listItem[count] = task; // Use the current count as the key
        addTask(count, task);
        taskList.push(listItem);
        localStorage.setItem("taskList", JSON.stringify(taskList));
        count++; // Increment count for the next task
        localStorage.setItem("count", count); // Store the updated count in local storage
        input.value = "";
        input.focus();
        location.reload();
    })

    let removeItems = document.getElementsByClassName("del-btn");
        for (let i = 0; i < removeItems.length; i++) {
            removeItems[i].addEventListener("click", function (event) {
                const liElement = event.target.closest("li");
                // console.log(liElement.id);
                let id = liElement.id;
                remove(id);
                liElement.remove();
            });
        }
        
        function remove(id){
            taskList = taskList.filter(obj => Object.keys(obj)[0] !== id);
            localStorage.setItem("taskList", JSON.stringify(taskList));
        }
    
    function addTask(count, task){
        listItems.innerHTML += `<li id=${count}><p>${task}</p><i class="fa-solid fa-trash del-btn"></i></li>`;    
    }
    
})
