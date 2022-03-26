// Problem-1:
function anaToVori(ana) {
    if (typeof ana == "number" && ana > 0) {
        const vori = ana / 16;
        return vori;
    } else {
        return "Wrong Input";
    }
}
// console.log(anaToVori(-100));


// Problem-2:
function pandaCost(singara, samucha, jilapi) {
    if (typeof singara == "number" && typeof samucha == "number" && typeof jilapi == "number" && singara >= 0 && samucha >= 0 && jilapi >= 0) {
        const total = (singara * 7) + (samucha * 10) + (jilapi * 15);
        return total;
    } else {
        return "Wrong Input";
    }
}
// console.log(pandaCost(10, 8, 0));


// Problem-3:
function picnicBudget(persons) {
    if (typeof persons == "number" && persons >= 0) {
        if (persons <= 100) {
            const cost = persons * 5000;
            return cost;
        } else if (persons <= 200) {
            const cost = (100 * 5000) + ((persons - 100) * 4000);
            return cost;
        } else {
            const cost = (100 * 5000) + (100 * 4000) + ((persons - 200) * 3000);
            return cost;
        }
    }
    else {
        return "Wrong Input";
    }
}
// console.log(picnicBudget(300));


// Problem-4:
function oddFriend(friendsName){
    const name =[];
    for (const element of friendsName){
        if(element.length % 2 !== 0){
            name.push(element)
        }
    }
    return name[0];
}

const friendsName = ["Atik", "Amit", "Sabit", "Delowar", "Tajimul", "Roma kanto kamar", "Ronggon"];
console.log(oddFriend(friendsName));