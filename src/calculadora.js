function sum(...args) {
    let total = 0
    for (let num of args) {
        total = total + num
    }

    return total
}

function resta(num1 = 0, num2 = 0) {
    return num1 - num2
}


module.exports = {
    sum,
    resta
}