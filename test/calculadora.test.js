//destructuring
const { sum, resta } = require("../src/calculadora")


describe("Este module prueba la calculadora", () => {
    test("Suma el número 1 + 5 debe ser igual a 6", () => {
        expect(sum(1, 5, 2)).toBe(8)
    })


    test("La resta de 5 - 3 debe ser igual a 2", () => {
        expect(resta(5, 3)).toBe(2)
    })

})


