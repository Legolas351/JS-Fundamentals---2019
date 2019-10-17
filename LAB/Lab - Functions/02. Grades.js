function grdes(grade) {

    let result = calcGrade();
    function calcGrade() {
        if (grade >= 2.00 && grade < 3.00) {
            return "Fail"
        } else if(grade >= 3.00 && grade < 3.50){
            return "Poor"
        }else if (grade >= 3.50 && grade < 4.50) {
            return "Good"
        }else if (grade >= 4.50 && grade < 5.50) {
            return "Very good"
        }else{
            return " Excellent"
        }

    }

    console.log(result);
    
    
}
grdes(4.50)