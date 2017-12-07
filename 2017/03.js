clear();
sideSize = (num) => {
    let val = Math.ceil(Math.sqrt(num));

    if (val % 2 === 0) return Math.ceil(Math.sqrt(num)) + 1;
    else return Math.ceil(Math.sqrt(num));
};

middle = (num) => {
    let size = sideSize(num);
    
}

ranges = (num) => {
    let sideMax = sideSize(num);
    let sideMin = sideMax - 2; 

    return {
        min: Math.pow(sideMin, 2) + 1,
        max: Math.pow(sideMax, 2)
    }
}

isBetween = (num, ranges) => {
    return (num >= ranges.min && num <= ranges.max);
}

num = 962;

console.log(ranges(num));
console.log(isBetween(num, ranges(num)));