//https://www.codewars.com/kata/5296455e4fe0cdf2e000059f

function calculate(a, o, b) {
    switch(o) {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return b===0?null:a/b;
        default:
            return null;
    }
}