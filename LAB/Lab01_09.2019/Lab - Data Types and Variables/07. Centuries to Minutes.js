function cToMin(centuries) {
    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minuts = hours * 60;

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minuts} minutes`);
}

cToMin(16)