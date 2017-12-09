clear();

banksInput = `14	0	15	12	11	11	3	5	1	6	8	4	9	1	8	4`;
// banksInput = `0 2 7 0`;

banks = banksInput.split('\t').map(item => +item);

zeroVector = () => banks.map(() => 0);

distribute = (vector, num, start) => {
    const dimension = vector.length;

    for (let i=0; i<num; i++) {
        vector[(i+start)%dimension] += 1;
    }

    return vector;
}

getMax = (banks) => {
    let max = Math.max(...banks);

    return {
        max: max,
        position: banks.indexOf(max)
    };
}

zeroBank = (banks, position) => {
    banks[position] = 0;
    return banks;
}

vectorAddition = (vec1, vec2) => {
    return vec1.map((bank, i) => bank + vec2[i]);
}

getNewState = (banks) => {
    let maxObj = getMax(banks);
    let diffVector = distribute(zeroVector(), maxObj.max, maxObj.position+1);

    banks = zeroBank(banks, maxObj.position);
    
    return vectorAddition(banks, diffVector);
}

stateExists = (states, state) => {
    return states.indexOf(state) > -1;
}

getLoopSize = (states, state) => {
    let itter = 0;
    for (let i=states.length; i > 0; i--) {
        if(states[i] === state) break;

        itter++;
    }

    return itter;
}

countItteration = (banks) => {
    let states = [];
    let state;

    states.push(banks.join(''));

    while(1) {
        state = getNewState(banks);
        if(stateExists(states, state.join(''))) break;

        states.push(state.join(''));
        banks = state;
    }

    console.log('Max size: ', states.length);
    console.log('Loop after: ', getLoopSize(states, state.join('')));
    
}

countItteration(banks);