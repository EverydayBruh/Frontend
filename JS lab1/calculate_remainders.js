function callCalculateRemainders() {    
    let example = "70 87 19 95 40 24 27 46 62 69 43 88 79 64 17 35 18 21 56 13 31";

    let userInput = prompt("Введите числа, разделенные пробелом:", example);
    let numbers = userInput.split(" ").map(Number);
    if (numbers.some(isNaN)) {
        alert("Введите корректный набор чисел. Встречены нечисловые значения.");
    } else {
        alert(`Остатки от деления на 5: ${calculateRemainders(numbers).join(" ")}`);
    }
}


function calculateRemainders(numbers) {
    let remainders = numbers.map(number => number % 5);
    return remainders;
}

