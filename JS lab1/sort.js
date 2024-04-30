function sortNumbers() {
    let input = prompt("Введите список натуральных чисел, разделенных пробелом", example);
    let numbers = input.split(" ").map(Number);
    if (numbers.some(isNaN)) {
        alert("Некорректный набор чисел.");
    } else {
        alert(`Отсортированный список: ${numbers.sort((a, b) => a - b).join(" ")}`);
    }
}

let example = "70 87 19 95 40 24 27 46 62 69 43 88 79 64 17 35 18 21 56 13 31";