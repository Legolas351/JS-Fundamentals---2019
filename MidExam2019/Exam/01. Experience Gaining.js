function expGain(input) {

    let neededExp = Number(input.shift());
    let battleCount = Number(input.shift());

    let accumEXP = 0;
    let simpleCount = 0;

    for (let i = 1; i <= battleCount; i++) {
        const currentExp = Number(input.shift());
        // debugger;
        accumEXP += currentExp;
        if (i % 3 === 0) {
            accumEXP += currentExp * 0.15;
        }
        if (i % 5 === 0) {
            accumEXP -= currentExp * 0.10;
        }
        simpleCount++
        if (accumEXP >= neededExp) {
            return `Player successfully collected his needed experience for ${simpleCount} battles.`
        }
    }

    let neededExperience = neededExp - accumEXP
    return `Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`

}

console.log(expGain(["400",
    "5",
    "50",
    "100",
    "200",
    "100",
    '20'
]))