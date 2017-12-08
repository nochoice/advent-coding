clear();
const sideSize = (num) => {
    let val = Math.ceil(Math.sqrt(num));

    if (val % 2 === 0) return Math.ceil(Math.sqrt(num)) + 1;
    else return Math.ceil(Math.sqrt(num));
};

const middle = (num) => {
    let size = sideSize(num);
    let center = Math.floor(size/2);
    return ({
        x: center,
        y: center
    });
}

const ranges = (num) => {
    let sideMax = sideSize(num);
    let sideMin = sideMax - 2; 

    return {
        min: Math.pow(sideMin, 2) + 1,
        max: Math.pow(sideMax, 2)
    }
}

const position = (num) => {
    let size = sideSize(num);
    let ran = ranges(num);
    let x = size - 1, y = size - 1;

    for(let i = ran.max; i >= ran.min; i--) {

        if(i === num) break;
        if(x>0 && y === size-1) {x--; continue};

        if(x === 0 && y > 0) {y--; continue} ;
        if(y === 0 && (x >= 0 && x < size-1)) {x++; continue};
        if(x === size - 1) {y++; continue};
        
    }

    return {
        x: x,
        y: y
    }
}

const isBetween = (num, ranges) => {
    return (num >= ranges.min && num <= ranges.max);
}

num = 347991;

// console.log(position(25));
// console.log(position(23));
// console.log(position(21));
// console.log(position(19));
// console.log(position(17));
// console.log(position(15));
// console.log(position(13));
// console.log(position(11));
// console.log(position(10));

const numPosition = position(num);
const middlePosition = middle(num);

steps = Math.abs(numPosition.x - middlePosition.x) + Math.abs(numPosition.y - middlePosition.y)
console.log(steps);


// ---------------------- 02 - first try

clear();
recursion = (max, border, itteration) => {

    itteration++;

    let borderNew = generateNextBorder([...border], itteration);
//     console.log(borderNew);
//     if (Math.max(...borderNew) < max) 
    if(itteration < 5) {
        recursion(max, borderNew, itteration);
    }
}

generateNextBorder = (border, itteration) => {
    console.log(border);
    let side = (2*itteration) + 1;
    let obvod = (4*side) - 4;

    let newVector = [];

    for(let i=0; i<obvod; i++) {
        if(border.length === 1 && i === 0) {
            newVector.push(1);
        } else {
            console.log(newVector[i-1])
            let prev = newVector[i-1];
            newVector.push(prev+1)
        }
    }

//     border.push(itteration);
    return newVector;
}

// firstPosition = ()

getPosition = (obvod, position) => {
    let side = (obvod+4) / 4;

    console.log(side, position);

    if(position === 0) return 0;
    else {

    }
}

recursion(15, [1], 0);
