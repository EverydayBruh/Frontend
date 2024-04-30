function callCalculateMedian(){
    let example = "5 8 3 9 7";
    alert("Ряд: "+ example)
    let numbers = example.split(" ").map(Number);
    let [a,b,c,d,e] = numbers; //деструктуризация
    alert(`Способ 1 \nМедиана: ` + calculateMedian(a,b,c,d,e));
    alert(`Способ 2 \nМедиана: ` + calculateMedian(...numbers));
    
}

function calculateMedian(...args){
    args.sort((a, b) => a - b);
    const mid = Math.floor(args.length / 2);
    if (args.length % 2 === 0) {
        return (args[mid - 1] + args[mid]) / 2;
    } else {
        return args[mid];
    }
}