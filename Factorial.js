//https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

function factorial(n){
    return n ? n * factorial(n - 1) : 1;
}