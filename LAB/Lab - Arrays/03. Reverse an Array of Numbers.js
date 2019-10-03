function reverce(n , arr) {
    let new_arr = [];
    let output = ""

    for (let i = 0; i < n; i++) {
        new_arr.push(arr[i])    
    }

    for (let i = new_arr.length -1 ; i >=0; i--) {
      output += `${new_arr[i]} `
        
    }

    console.log(output);
    
    
}
reverce(3, [10, 20, 30, 40, 50])