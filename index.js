function add (a, b){
    var sum = a + b; 
    return sum;
}

function subtract (a, b){
    var diff = a - b;
    return diff;
}

function multiply (a, b){
    var product = a * b; 
    return product;
}

function divide (a, b){
    var div = a / b; 
    return div; 
}

function increment(n= 5){
    return ++n;
}

function decrement(n = 4){
    return --n; 
}

function makeInt(string = '22'){
    var num= parseInt(string, 10);
    return num; 
}

function preserveDecimal(string= '2.222'){
    var num = parseFloat(string, 10); 
    return num;
}
