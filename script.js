//1
function addressConverter() {
    const userInput = input.value;
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
    const userInput = goodsCount.value;

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
function weatherAnalyser(){
    const userInput = weather.value
    if (userInput == '') {
        alert('Enter a value')
    } else if (userInput > 28){
        result.innerHTML = 'Hot Weather! Umbrellas 🥵.'
        console.log(result.value)
    } else if(userInput >= 20 && userInput <=28) {
        result.innerHTML = 'The weather is warm today! 😊'
    } else{
        result.innerHTML = 'Cold Weather! Inform everybody to put on sweaters.🥶'
    }
}

//5
const checkBMI = () => {
    if(height.value == '' || weight.value == '') {
        alert('Fill in the empty space(S)')
    } else {
        console.log(height.value, weight.value);
        const formula = Number(weight.value)/(Number(height.value)**2)
        console.log(formula);
        if(formula < 18.5) {
            showStatus.innerHTML = "You are underweight, you need to eat more"
        } else if(formula >= 18.5 && formula <= 24.9) {
            showStatus.innerHTML = "You are healthy, keep it up"
        } else if(formula >= 25 && formula <= 29.9) {
            showStatus.innerHTML = "You are overweight, keep it down"
        } else if(formula >= 30) {
            showStatus.innerHTML = "You are obese, visit an hospital ASAP"
        }
    }
}


//6
function verifyUsername(){
    const userInput = input.value

    if (userInput == '') {
        result.value = 'Enter a word'
    }

    const regexForBeginningOfText = userInput.replaceAll(/(?<=\s+)/g, '') //This still adds a space at the beginning
    console.log(regexForBeginningOfText)
    //This second regex replaces all spaces with just one space
    
    console.log(regexForCompleteText)

    result.innerHTML = regexForCompleteText

}