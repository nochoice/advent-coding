clear();

input = [];
lengths = [88,88,211,106,141,1,78,254,2,111,77,255,90,0,54,205];

for (let i=0; i<256; i++) {
    input.push(i);
}

reverseArr = (arr) => {
    return arr.reverse();
}

getSubArray = (arr, position, countOfItems) => {
    const end = position + countOfItems;
    const till = position+countOfItems;
  
    let output = [];
     
    for (let i = position; i<till; i++) {
        output.push(arr[i%arr.length]);
    }

    return output;  
}

replaceArr = (arr, repArr, position) => {
    const till = position+repArr.length;
    const arrDup = [...arr];
    let itt = 0;
    
    for (let i=position; i<till; i++) {
        arrDup[i%arrDup.length] = repArr[itt];
        itt++;
    }

    return arrDup;
}

run = (input, lengths, currentPosition, skipSize) => {
   lengths.forEach((len, itt) => {
        let sub = getSubArray(input, currentPosition, lengths[itt]);
        let rep = replaceArr(input, reverseArr(sub), currentPosition);

        input = rep;
        skipSize + itt;

        console.log(skipSize);

        currentPosition = currentPosition + skipSize + itt + lengths[itt];
    }); 

    return {
        arr: input,
        currentPosition: currentPosition,
        skipSize: skipSize + lengths.length
    };
}

out = run(input, lengths, 0, 0);

console.log(out);

// currentPosition = 0;

// console.log(input);
// console.log(input[0] * input[1]);