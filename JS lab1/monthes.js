function getMonthName() {
    let monthNumber = prompt("Введите номер месяца (1 - 12):");
    const months = [
        "Январь", "Февраль", "Март",
        "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь",
        "Октябрь", "Ноябрь", "Декабрь"
    ];

    let month = monthNumber > 0 && monthNumber <= 12 ? months[monthNumber - 1] : "Некорректный номер месяца";
    alert(month);
}

