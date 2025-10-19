//1
function addressConverter() {
    const userInput = input.value;
    //this method convert uppercase letters to lowercase
    result.innerHTML = userInput.toLowerCase()
}

//2
function removeWhitespaces() {
    const userInput = input.value

    if (userInput == '') {
        result.value = 'Enter a word'
    }

    //The regex (?<=\S) will lookbehind incase of whitespace that could be behind the first word
    const regexForBeginningOfText = userInput.replaceAll(/(?<=\s)/g, '') //This still adds a space at the beginning
    console.log(regexForBeginningOfText)
    //This second regex replaces all spaces with just one space
    const regexForCompleteText = regexForBeginningOfText.replaceAll(/\s+/g, ' ')
    console.log(regexForCompleteText)

    result.innerHTML = regexForCompleteText
}

//3
function checkCart() {
    const userInput = Number(numberInput.value);

    if (userInput == '') {
        alert('Enter a value');
    } else if (userInput % 2 == 0) {
        result.innerHTML = 'Eligible for discount!'
    }
    else {
        result.innerHTML = 'Not eligible!'
    }
}

//4
function weatherAnalyser() {
    const userInput = numberInput.value
    if (userInput == '') {
        alert('Enter a value')
    } else if (userInput > 28) {
        result.innerHTML = 'Hot Weather! Umbrellas 🥵.'
        console.log(result.value)
    } else if (userInput >= 20 && userInput <= 28) {
        result.innerHTML = 'The weather is warm today! 😊'
    } else {
        result.innerHTML = 'Cold Weather! Inform everybody to put on sweaters.🥶'
    }
}

//5
const checkBMI = () => {
    if (height.value == '' || weight.value == '') {
        alert('Fill in the empty space(S)')
    } else {
        console.log(height.value, weight.value);
        const formula = Number(weight.value) / (Number(height.value) ** 2)
        console.log(formula);
        if (formula < 18.5) {
            showStatus.innerHTML = "You are underweight, you need to eat more"
        } else if (formula >= 18.5 && formula <= 24.9) {
            showStatus.innerHTML = "You are healthy, keep it up"
        } else if (formula >= 25 && formula <= 29.9) {
            showStatus.innerHTML = "You are overweight, keep it down"
        } else if (formula >= 30) {
            showStatus.innerHTML = "You are obese, visit an hospital ASAP"
        }
    }
}


//6
function verifyUsername() {
    const userInput = input.value

    if (userInput == '') {
        result.value = 'Enter a word'
    }

    const regexForSpaces = userInput.match(/(?<=\s+)/g)
    const regexForCharacters = userInput.match(/\W/g)
    const requiredregex = userInput.match(/[a-zA-Z0-9_]/g)

    if (regexForSpaces) {
        result.innerHTML = 'Remove spaces'
    } else if (regexForCharacters) {
        result.innerHTML = 'Remove Special characters'
    } else if (requiredregex) {
        result.innerHTML = 'Username validated'
    }
}

//7
const checkLuggageWeight = () => {
    const userInput = numberInput.value
    if (userInput.value == '') {
        alert('Fill in the empty space')
    } else {
        if (userInput > 30) {
            result.innerHTML = "Overweight"
        } else if (userInput >= 20 && userInput <= 30) {
            result.innerHTML = "Allowed"
        } else if (userInput < 20) {
            result.innerHTML = "Underweight"
        } else {
            result.innerHTML = "Invalid input"
        }
    }
}

//8
function emailVerifier() {
    userInput = input.value
    const regexEmailValidator = userInput.match(/@oauife.edu.ng/)

    if (regexEmailValidator) {
        result.innerHTML = 'True'
    } else {
        result.innerHTML = 'False'
    }
}

//9
const gradingSystem = () => {
    const userInput = numberInput.value
    if (userInput.value == '') {
        alert('Fill in the empty space')
    } else {
        if (userInput >= 70 && userInput <= 100) {
            result.innerHTML = "A (Excellent)"
        } else if (userInput >= 60 && userInput <= 69) {
            result.innerHTML = "B (Very Good)"
        } else if (userInput >= 50 && userInput <= 59) {
            result.innerHTML = "C (Good)"
        } else if (userInput >= 40 && userInput <= 49) {
            result.innerHTML = "D (Very Good)"
        } else if (userInput >= 0 && userInput <= 39) {
            result.innerHTML = "F (Fail)"
        } else {
            result.innerHTML = "Invalid input"
        }
    }
}

//10

const discountCalc = () => {
    const userInput = Number(numberInput.value)
    if (userInput.value == '') {
        alert('Fill in the empty space')
    } else {
        if (userInput > 20000) {
            let newPrice = userInput + (0.15 * userInput)
            result.innerHTML = "Discount - 15%. New price - " + newPrice;
        } else if (userInput >= 10001 && userInput <= 20000) {
            let newPrice = userInput + (0.10 * userInput)
            result.innerHTML = "Discount - 10%. New price - " + newPrice;
        } else if (userInput >= 5000 && userInput <= 10000) {
            let newPrice = userInput + (0.5 * userInput)
            result.innerHTML = "Discount - 5%. New price - " + newPrice;
        } else if (userInput < 5000) {
            result.innerHTML = "No Discount";
        }
    }
}

//11

const jambCutOff = () => {
    const userInput = Number(numberInput.value)
    if (userInput.value == '') {
        alert('Fill in the empty space')
    } else {
        if (userInput <= 400) {
            if (userInput > 280) {
                result.innerHTML = "You're qualified to study Medicine"
            } else if (userInput >= 250) {
                result.innerHTML = "You're qualified to study Engineering"
            } else if (userInput >= 220) {
                result.innerHTML = "You're qualified to study Sciences"
            } else if (userInput >= 200) {
                result.innerHTML = "You're qualified to study Art courses"
            } else {
                result.innerHTML = 'Invalid input'
            }
        } else{
            result.innerHTML = 'Score cannot be greater than 400'
        }

    }
}

//12

function votingAgeVerifier() {
    const userInput = Number(numberInput.value);
    
    if (userInput <= 2025){
        const age = 2025 - userInput;
        if (age >= 18){
            result.innerHTML = 'Eligible to vote';
        } else{
            result.innerHTML = 'Not eligible to vote';
        }
    } else {
        result.innerHTML = 'Invalid birth year';
    }
}