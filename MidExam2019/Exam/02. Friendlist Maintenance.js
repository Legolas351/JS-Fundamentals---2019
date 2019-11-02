function friendList(input) {
    let allFriends = input.shift().split(", ");
    let blacklistedNamesCount = 0;
    let lostNamesCount = 0;
    for (const line of input) {
        if (line === "Report") {
            break;
        }

        let token = line.split(" ");
        let command = token[0];

        switch (command) {
            case "Blacklist":
                if (allFriends.indexOf(token[1]) === -1) {
                    console.log(`${token[1]} was not found.`);
                    break;
                }
                let index = allFriends.indexOf(token[1])
                allFriends.splice(index, 1, "Blacklisted")
                console.log(`${token[1]} was blacklisted.`);
                blacklistedNamesCount++
                break;

            case "Error":
                let ind = Number(token[1]);
                let name = allFriends[ind];
                if (name === "Blacklisted" || name === "Lost") {
                    break;
                } else {
                    allFriends.splice(ind, 1, "Lost")
                }
                console.log(`${name} was lost due to an error.`);
                lostNamesCount++
                break;
            case "Change":
                let ind2 = token[1];
                let newName = token[2];
                let currentName = allFriends[ind2];

                if (ind2 >= 0 && ind2 <= allFriends.length) {
                    allFriends.splice(ind2, 1, newName)
                    console.log(`${currentName} changed his username to ${newName}.`);

                }
                break;
        }
    }

    console.log(`Blacklisted names: ${blacklistedNamesCount}\nLost names: ${lostNamesCount}`)
    console.log(allFriends.join(" "));


}
friendList([
    'Mike, John, Eddie, William',
    'Error 3',
    'Error 3',
    'Change 0 Mike123',
    'Blacklist Eddie',
    'Report'
]
);
