
let numberOne = '0'
let numberTwo = ''
let operator = null

onload = reset


function getNumber(number) {
    numberOne = numberOne.replace(" ", "")
    if(operator == null) {
        numberOne = numberOne == '0' ? number : numberOne + number
        document.getElementsByClassName('response')[0].textContent = numberOne
    }
    else {
        numberTwo = numberTwo == '' ? number : numberTwo + number
        document.getElementsByClassName('response')[0].textContent = `${numberOne} ${operator} ${numberTwo}`
    }
}


function getOperator(operatorParam) {
    if(operator != null) {
        operate()
    }
    else {
        operator = operatorParam
        document.getElementsByClassName('response')[0].textContent = numberOne + " " + operator   
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
        response.textContent = numberOne = '0'
        return 
    }
    const array = response.textContent.split('')
    array.pop()
    const result = array.join('').split(/[\s,]+/)
    operator = null
    numberTwo = ''

    result.map((r, index) => {
        if(index === 0) numberOne = r
        if(index === 1 && ["÷", "+", "-", "x"].includes(r)) operator = r
        if(index === 2) numberTwo = r
    })

    response.textContent = numberOne + 
                        (operator == null ? '' : ' '+operator) + 
                        (numberTwo.length > 0 ? ' ' + numberTwo : '')  
}


function getEquals() {
    operate()
    operator = null
}


function operate() {
    if(operator == null) {
        return
    }
    if(operator == '÷' && parseFloat(numberOne) !== 0 && numberTwo != '' && parseFloat(numberTwo) == 0 ) {
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
    if(operator == 'x') {
        response.textContent = (parseFloat(numberOne) * parseFloat(numberTwo))
        calculation.textContent = `${numberOne} x ${numberTwo} = ${response.textContent}` 
    }
    if(operator == '÷') {
        response.textContent = (parseFloat(numberOne) / parseFloat(numberTwo))
        calculation.textContent = `${numberOne} ÷ ${numberTwo} = ${response.textContent}` 
    }
}

