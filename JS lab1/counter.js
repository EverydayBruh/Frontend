let Counter = {
    count: 0,
    add: function(value) {
        this.count += value;
    },
    sub: function(value) {
        this.count -= value;
    }
}

function testCounter(){
    if(confirm("Плюс два или минус 2?"))
        Counter.add(2);
    else
        Counter.sub(2);
    alert("Counter.count = " + Counter.count);
}