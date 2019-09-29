function sum(num) {
  let n = String(num);                                                         //Първо трябва да го обърнем на стринг
  let sumOfNum = 0;
  for (let i = 0; i < n.length; i++) {                                       // Обхождаме стринга и вадим един по един всеки символ
   
    const element = n[i];
    sumOfNum += Number(element);                                          // Превръщаме синволът и го добавяме към предварително декларирана променлива "sumOfNum"
  }
  console.log(`${sumOfNum}`);
}
sum(245678);
