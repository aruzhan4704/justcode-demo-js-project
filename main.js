

const taskArray = []

let idCounter = 0

const statusTypes = {
    1: "selected",
    2: " in work",
    3: " finished"
}

const statusCssClasses = {
    1: "selected",
    2: " in-work",
    3: " finished"
}
const todolistContent = document.querySelector(".todolist-content")

const createTask = (taskTitle) => { //add task into the massive
    const newTask = { //object of the task
        id: idCounter,
        title: taskTitle,
        status: 1
    }
    taskArray.push(newTask) //add new task in massive

    idCounter += 1  //idCounter + 1(id do not allowed to repeat)
}
const submitTask = () => {
    const input = document.querySelector(".task-title-value") // user write the name of the new massive
    createTask(input.value)
    console.log(taskArray)

    showTasks()
}

const showTasks = () => {
    let content = ""

    for (const [index, task] of taskArray.entries()) {
        content += `
 <div class= "task-container">
<div id="task-title-${task.id}" class="task-title">${index + 1} ${task.title}</div>
<input onblur="submitTaskTitle(${task.id})" id="task-input-${task.id}" class ="task-input hidden" type = "text" value = "${task.title}">
<select class="task-status ${statusCssClasses[task.status]}" 
id="task-status-select-${task.id}" onchange="statusChange(${task.id})">
<option value="1" ${task.status == 1 ? "selected" : ""}>selected</option>
<option value="2" ${task.status == 2 ? "selected" : ""}>in work</option>
<option value="3" ${task.status == 3 ? "selected" : ""}>finished</option>
${statusTypes[task.status]}>
</select>
<div class="task-icons" >
<div onclick="updateTaskTitle(${task.id})" class="task-icon-container" > <img src ="assets/edit.png"> </div>
<div onclick="deleteTask(${task.id})" class="task-icon-container">  <img src ="assets/delete.png"> </div>
</div>
</div>
 `

    }

    todolistContent.innerHTML = content
}

const getIndexById = (id) => {
    // for(let i = 0; i < taskArray.length, i++){
    ///    const task = taskArray [i]
    // }

    for (const [index, task] of Object.entries(taskArray)) {
        if (id == task.id) return index
    }
    return -1
}

const statusChange = (id) => {
    const selectElement = document.querySelector("#task-status-select-"+id)
    const newStatus = selectElement.value
    const targetIndex= getIndexById(id)

    taskArray[targetIndex].status = newStatus
    showTasks()
}
const updateTaskTitle = (id) => {
    const targetIndex = getIndexById(id)

    const targetTitleElement = document.querySelector("#task-title-" + id)
    const targetInputElement = document.querySelector("#task-input-" + id)

    targetTitleElement.classList.add("hidden")
    targetInputElement.classList.remove("hidden")
}

const submitTaskTitle = (id) => {
    const targetInputElement = document.querySelector("#task-input" + id)
    const targetTitleElement = document.querySelector("#task-title-" + id)
    const targetIndex = getIndexById(id)

    taskArray[targetIndex].title = targetTitleElement.value
    targetTitleElement.classList.remove("hidden")
    targetInputElement.classList.add("hidden")
    showTasks()
}

const deleteTask = (id) => {
    const targetIndex = getIndexById
    taskArray.splice(targetIndex, 1)
    showTasks()
}

// console.log("TASK ARRAY", taskArray)

createTask("first task!")
createTask(" task!")
createTask(" newTask")
createTask(" anotherTask")
// console.log("TASK ARRAY:", taskArray)

showTasks()


// crud:
// create 
// read
// update
