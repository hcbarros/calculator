
let numberOne = '0'
let numberTwo = ''
let operator = null

onload = reset


function getNumber(number) {
    if(operator == null) {
        numberOne = numberOne == '0' ? number : numberOne + number
        document.getElementsByClassName('response')[0].textContent = numberOne
    }
    else {
        numberTwo = numberTwo == '' || numberTwo == '0' ? number : numberTwo + number
        document.getElementsByClassName('response')[0].textContent = numberTwo
    }
}


function getOperator(operatorParam) {
    operate()
    operator = operatorParam
}


function getDot() {
    if(operator == null && !numberOne.includes(".")) {
        numberOne += "."
        document.getElementsByClassName('response')[0].textContent = numberOne
    }
    else if(operator != null && !numberTwo.includes(".")) {
        numberTwo += "."
        document.getElementsByClassName('response')[0].textContent = numberTwo
    }
}


function reset() {
    numberOne = '0'
    numberTwo = ''
    operator = null
    document.getElementsByClassName('calculation')[0].textContent = ''
    document.getElementsByClassName('response')[0].textContent = numberOne
}


function undo() {
    let response = document.getElementsByClassName('response')[0]
    if(response.textContent.length === 1) {
        response.textContent = '0'
        numberTwo = operator == null ? '' : '0'
        numberOne = operator == null ? '0' : numberOne
        return 
    }
    const array = response.textContent.split('')
    array.pop()
    response.textContent = array.join('')
}


function operate() {
    if(numberTwo == '') {
        return
    }
    if(operator == '÷' && parseFloat(numberOne) !== 0 && numberTwo != '' && parseFloat(numberTwo) == 0 ) {
        alert(`It is not possible to divide ${numberOne} by 0`)
        return
    }
    numberOne = numberOne.indexOf('.') === numberOne.length - 1 ? numberOne + '0' : numberOne
    numberTwo = numberTwo.indexOf('.') === numberTwo.length - 1 ? numberTwo + '0' : numberTwo
    const calculation = document.getElementsByClassName("calculation")[0]
    const response = document.getElementsByClassName("response")[0]

    if(operator == '+') {
        response.textContent = (parseFloat(numberOne) + parseFloat(numberTwo)).toString()
    }
    if(operator == '-') {
        response.textContent = (parseFloat(numberOne) - parseFloat(numberTwo)).toString()
    }
    if(operator == 'x') {
        response.textContent = (parseFloat(numberOne) * parseFloat(numberTwo)).toString()
    }
    if(operator == '÷') {
        response.textContent = (parseFloat(numberOne) / parseFloat(numberTwo)).toString()
    }

    calculation.textContent = `${numberOne} ${operator} ${numberTwo} = ${response.textContent}` 
    numberOne = response.textContent
    numberTwo = ''
}
