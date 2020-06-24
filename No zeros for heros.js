function noBoringZeros(n) {
    let str = n + '';
    let newStr = str.split("");
    for(let i = newStr.length - 1; i >= 0; i--){
        if(newStr[i] === "0")
            newStr.pop();
        else break;
    }
    return +newStr.join('');
}
