function bitMiner(array) {
  let bitSum = 0;
  let totalSum = 0;
  let day = 0;
  let firstCoin = 0;

  for (let index = 0; index < array.length; index++) {
    let gold_Daily = array[index];
    day++;
    if (day % 3 === 0) {
      gold_Daily *= 0.7;
    }
    totalSum += gold_Daily * 67.51;
    while (totalSum >= 11949.16) {
      bitSum += 1;
      totalSum -= 11949.16;
      if (bitSum !== 0 && bitSum < 2) {
        firstCoin = day;
      }
    }
  }

  console.log(`Bought bitcoins: ${bitSum}`);
  if (bitSum !== 0) {
    console.log(`Day of the first purchased bitcoin: ${firstCoin}`);
  }
  console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
}
bitMiner([3124.15, 504.212, 2511.124]);

// bitMiner([50, 100])

// bitMiner([100,200,300])
