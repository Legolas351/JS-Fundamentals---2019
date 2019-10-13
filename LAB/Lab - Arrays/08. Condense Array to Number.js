function sumAll(nums) {
  while (nums.length > 1) {                                             // Докато масива има повече от 1 елемент ( число)
    let condensed = Array(nums.length - 1);                             // Правим си нов масив в който ...
    for (let i = 0; i < nums.length - 1; i++) {                         // ... първо обхождаме основният масив nums ...       
      condensed[i] = Number(nums[i]) + Number(nums[i + 1]);             //... след което взимаме двата съседни елемнта от nums ( i & i+1 ) и ги довабявме в новоят ни масив
    }
    nums = condensed;                                                   // ~!!!~  ВАЖНО - презаписваме стартият масив с новият за да почнем цикълат отначало докато не остане един елемент 
  }
  console.log(nums[0]);
}
sumAll([5, 0, 4, 1, 2]);

// function condense_arr2num(nums) {
//   let condense = [];
//   let sum = 0;
//   for (let i = 0; i < nums.length - 1; i++) {
//     let element = nums[i] + nums[i + 1];
//     condense.push(element);
//   }
//   for (let i = 0; i < condense.length -1; i++) {
//       const element = condense[i] + condense[i +1];
//       sum += element

//   }
//   console.log(sum);

// }
// condense_arr2num([5,0,4,1,2]);
