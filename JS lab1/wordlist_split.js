function splitWords(){
    let word_list = prompt("Введите список слов через запятую:", "Пусть крест, который я несу, станет еще тяжелее").split(",");
    alert(word_list.join("."));
}