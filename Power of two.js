//https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript

function isPowerOfTwo(n){
    while (n > 1){
        n= n / 2;
    }
    return n === 1;
}