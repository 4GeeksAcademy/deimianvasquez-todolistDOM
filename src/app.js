const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");


function createTaskElement(task) {
    // Aquí se cera un elemento li, con un span dentro y le devuelve
    const li = document.createElement("li")
    const span = document.createElement("span")

    span.textContent = "❌"
    span.classList.add("delete-btn")
    li.textContent = task
    li.appendChild(span)

    return li

    // Esto es lo que devuelve
    /*
     <li>
            Bañar al gato
            <span class="delete-btn">❌</span>
        </li>
    
    */
}


taskForm.addEventListener("submit", (event) => {
    event.preventDefault() // le quitamos el comportamiento por defecto del formulario

    const taskInput = document.querySelector("#task-input") // nos traemos el input donde se escribe la tarea
    const task = taskInput.value // extraemos el valor del input (La tarea)

    if (task) {// valido que exista la tarea
        taskList.appendChild(createTaskElement(task)) // agrego la tarea al ul
        taskInput.value = "" // reseteo el input a vacío
    }

})


function deleteTask(taskItem){
    taskItem.remove()
}


taskList.addEventListener("click", (event)=>{
    if(event.target.classList.contains("delete-btn")){
        deleteTask(event.target.parentElement)
    }
})



module.exports = {
    createTaskElement
}