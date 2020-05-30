function capital(capitals){
    const arr = [];
    for (let i = 0; i < capitals.length; i++) {
        if (capitals[i].hasOwnProperty('state')){
            arr.push(`The capital of ${capitals[i]['state']} is ${capitals[i]['capital']}`);
        }
        if (capitals[i].hasOwnProperty('country')){
            arr.push(`The capital of ${capitals[i]['country']} is ${capitals[i]['capital']}`);
        }
    }

    return arr;
}