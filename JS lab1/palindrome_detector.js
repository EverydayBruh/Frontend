function isPalindrome() {
    let str = prompt("Введите слово:", "");
    let reversedStr = str.split("").reverse().join("");
    alert(str === reversedStr ? "Да" : "Нет");
}
