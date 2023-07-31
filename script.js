
let numberOne = '0'
let numberTwo = '0'
let operator = null


function getNumber(number) {
    if(operator == null) {
        numberOne = numberOne == '0' ? number : numberOne + number
    }
    else {
        numberTwo = numberTwo == '0' ? number : numberTwo + number
    }
}


function getOperator(operatorParam) {
    if(operator != null) {
        operate()
    }
    else {
        operator = operatorParam
    }
}


function getDot() {
    if(operator == null && !numberOne.includes(".")) {
        numberOne += "."
    }
    else if(operator != null && !numberTwo.includes(".")) {
        numberTwo += "."
    }
}


function operate() {
    if(operator == null) {
        return
    }
    if(operator == '/' && parseFloat(numberOne) != 0 && parseFloat(numberTwo) == 0 ) {
        alert('')
        return
    }
    const calculation = document.getElementsByClassName("calculation")[0]
    const response = document.getElementsByClassName("response")[0]

    if(operator == '+') {
        response.textContent = (parseFloat(numberOne) + parseFloat(numberTwo))
        calculation.textContent = `${numberOne} + ${numberTwo} = ${response.textContent}` 
    }
    if(operator == '-') {
        response.textContent = (parseFloat(numberOne) - parseFloat(numberTwo))
        calculation.textContent = `${numberOne} - ${numberTwo} = ${response.textContent}` 
    }
    if(operator == '*') {
        response.textContent = (parseFloat(numberOne) * parseFloat(numberTwo))
        calculation.textContent = `${numberOne} x ${numberTwo} = ${response.textContent}` 
    }
    if(operator == '*') {
        response.textContent = (parseFloat(numberOne) / parseFloat(numberTwo))
        calculation.textContent = `${numberOne} / ${numberTwo} = ${response.textContent}` 
    }
}