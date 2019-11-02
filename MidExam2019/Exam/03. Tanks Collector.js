function collectTanks(input) {
    let myCollection = input.shift().split(", ");
    let commandCount = Number(input.shift());

    for (let i = commandCount; i > 0; i--) {
        let token = input.shift().split(", ")
        let command = token[0];
        
        switch (command) {
            case "Add":
                let tankToAdd = token[1];
                if (myCollection.includes(tankToAdd)) {
                    console.log("Tank is already bought");
                } else {
                    console.log("Tank successfully bought");
                    myCollection.push(tankToAdd);
                }
                break;
            case "Remove":
                let tankToRemove = token[1];
                if (!myCollection.includes(tankToRemove)) {
                    console.log("Tank not found");
                } else {
                    let ind = myCollection.indexOf(tankToRemove);
                    myCollection.splice(ind, 1);
                    console.log("Tank successfully sold");

                }

                break;

            case "Remove At":
                let indToRemove = token[1];
                if (indToRemove < 0 || indToRemove > myCollection.length) {
                    console.log("Index out of range");

                    break;
                }
                myCollection.splice(indToRemove, 1)
                console.log("Tank successfully sold");

                break;

            case "Insert":
                let indexToInsert = token[1];
                let tankToInser = token[2];

                if (indexToInsert < 0 || indexToInsert > myCollection.length) {
                    console.log("Index out of range");
                    break;
                }
                if (myCollection.includes(tankToInser)) {
                    console.log("Tank is already bought");

                } else {
                    myCollection.splice(indexToInsert, 0, tankToInser);

                    console.log("Tank successfully bought");
                }


                break;
        }
        
    
    }

    console.log(myCollection.join(", "))
}
collectTanks(
    [
        'T 34, T 34 B, T92, AMX 13 57',
        '4',
        'Add, T 34',
        'Remove, AMX CDC',
        'Insert, 10, M60',
        'Remove At, 1'
      ]
)
