function even_odd_subtrac(input) {
    let sum_Even = 0;
    let sum_Odd = 0;
    

    for (let i = 0; i < input.length; i++) {                // Обхождам масива по дължината му.
        let element = Number(input[i]);                     // Взимам елемент от Input на позиция i и го правя на число
        if (element % 2 === 0) {                            // проверявам дали е четно или нечетно
            sum_Even += element
        } else {
            sum_Odd += element
        }
        
    }
    
    //let sum_total = parseInt(Math.max(sum_Even ,sum_Odd) - Math.min(sum_Even, sum_Odd));   // това го махнах заради ословието на задачата
    let sum_total = sum_Even - sum_Odd;
    console.log(`${sum_total}`);
    
    
}
even_odd_subtrac([2,4,6,8,10])