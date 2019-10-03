function daysOfWeek(day) {
    let dayOfWeek = ["Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (day >= 1 && day <=7) {
        console.log(dayOfWeek[day - 1]);
        
    } else {
        console.log("Invalid day!");
        
    }
    
}
daysOfWeek(7875)