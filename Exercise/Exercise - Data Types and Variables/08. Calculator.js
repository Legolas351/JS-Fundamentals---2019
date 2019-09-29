function calc( num1 , operation , num2) {
    let result = 0;
   switch (operation) {
       case "-":
           result = num1 - num2;
           break;
   
       default:
            result = num1 + num2;
           break;
   }
   console.log(result);
   
}
calc(5,
    '+',
    10)