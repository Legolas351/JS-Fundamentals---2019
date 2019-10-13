function merge(arr1, arr2) {
  let output_Array = [];                                                // Създавам празен масив за да си вкарвам неща вътре

  for (let i = 0; i < arr1.length; i++) {                              // Завъртам един цикъл 
    if (i % 2 === 0) {
      output_Array.push(Number(arr1[i]) + Number(arr2[i]));           // при четно i довавям с .push() към празният масив
    } else {
      output_Array.push(arr1[i] + arr2[i]);
    }
  }
  console.log(output_Array.join(" - "));                             // Правя масива на string и му добавям " - "
}
merge(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
