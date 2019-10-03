function sumEven(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        let element = Number(data[i]);
        if (element % 2 === 0) {
            sum += element
        }
    }

    console.log(sum);
    
}

sumEven(['3','5','7','9'])