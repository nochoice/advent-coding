clear();

input = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`;

register = {};

instructionsParse = (str) => {
    return str.split('\n').map((item) => item.match(/(\w*) (\w*) (.*) if (.*)/));
}

conditionParse = (condition) => condition.match(/(.*) (.*) (.*)/);

prepareRegisterCondition = (condition) => {
    if(isNaN(condition[1])) register[condition[1]] = register[condition[1]] || 0;
    if(isNaN(condition[3])) register[condition[3]] = register[condition[3]] || 0;
}

inc = (a, b) => {
    return a+b;
}

instructions = instructionsParse(input);

instructions.forEach(instruction => {
    let condition = instruction[4];

    prepareRegisterCondition(conditionParse(condition));

    
    
});

console.log(register);

console.log(instru);


