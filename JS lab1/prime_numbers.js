function getPrimeNumbers() {
    let primeCount = prompt("Введите количество чисел:");
    primeCount = parseInt(primeCount, 10);

    if (isNaN(primeCount) || primeCount < 0) {
        alert("Некорректное число!");
        return;
    }

    let i = 0;
    let primeList =[];
    while(primeList.length < primeCount){
        if(isPrime(i)) primeList.push(i);
        i++;
    }
    alert(primeList.join(" "));
}

function isPrime(x) {
    for (let i = 2, s = Math.sqrt(x); i <= s; i++)
        if (x % i === 0) return false;
    return x > 1;
}