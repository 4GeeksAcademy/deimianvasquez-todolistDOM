/**
 * @jest-environment jsdom
 */

const { createTaskElement } = require("../src/app.js")



describe("Valida que la función devuelva el nodo li", () => {
    const taskText = "Pasear al perro"
    const taskElement = createTaskElement(taskText)

    test("deberia crear un nodo de html <li> con el texto de taskTest y el boton de eliminar la tarea", () => {
        expect(taskElement.tagName).toBe('LI')
    })


    /*
    <li>
           Pasear al perro
           <span class="delete-btn">❌</span>
       </li>
   
   */

})



