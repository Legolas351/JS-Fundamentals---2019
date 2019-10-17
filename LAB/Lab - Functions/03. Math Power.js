function mathPower(num , power) {
    let result = calcPower();
    function calcPower() {
        let output = Math.pow(Number(num) , Number(power))
        return output
    }
    console.log(result);
    
}
mathPower(2,8)