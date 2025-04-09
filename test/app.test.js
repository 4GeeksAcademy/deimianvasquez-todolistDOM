const { createTaskElement} = require("../src/app")

describe('createTaskElement', () => {
    test('debería crear un elemento li con el texto de la tarea y el botón de eliminación', () => {
        const taskText = 'Pasear al perro';
        const taskElement = createTaskElement(taskText);

        expect(taskElement.tagName).toBe('LI');
        expect(taskElement.textContent).toContain(taskText);

        const deleteButton = taskElement.querySelector('.delete-btn');

        expect(deleteButton).toBeTruthy();
        expect(deleteButton.tagName).toBe('SPAN');
        expect(deleteButton.textContent).toBe('❌');
    });
});

