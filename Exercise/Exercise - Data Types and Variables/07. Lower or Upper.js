function thing(char) {
    let output = char === char.toUpperCase() ? "upper-case" : "lower-case";   //Conditional (ternary) operator -  "condition ? val1 : val2" -->  output е True и връща /n/
    console.log(output);                                                        // val1(upper-case) ако условието "char === char.toUpperCase()" e вярно.                           
     
}
thing("f")