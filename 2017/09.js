clear();

group = () => {
    
}

parser = (input) => {
    const arr = input.split('');
    let group = 0;
    let score = 0;
    let stack = [];

    for (let i=0; i<arr.length; i++) {
        let ch = arr[i];
        if(ch === '{') {
            stack.push('{');
            group++;
            score += stack.length;
        }

        if(ch === '}') stack.pop();
    }

    console.log(arr, group, score);
}

parser('{}');
parser('{{{}}}');
parser('{{},{}}');
parser('{{{},{},{{}}}}');