clear();

input = `0: 3
1: 2
2: 4
4: 4
6: 5
8: 6
10: 6
12: 6
14: 6
16: 8
18: 8
20: 8
22: 8
24: 10
26: 8
28: 8
30: 12
32: 14
34: 12
36: 10
38: 12
40: 12
42: 9
44: 12
46: 12
48: 12
50: 12
52: 14
54: 14
56: 14
58: 12
60: 14
62: 14
64: 12
66: 14
70: 14
72: 14
74: 14
76: 14
80: 18
88: 20
90: 14
98: 17`;

layers = input.split('\n')
                .map(layer => {
                    const line = layer.split(': ');
                    return {
                        depth: +line[0],
                        range: +line[1],
                        position: 1,
                        inc: 1
                    }
                })
                .sort((a, b) => a.depth > b.depth)
                .reduce((acc, layer) => {
                    return acc.set(layer.depth, layer);
                }, new Map())

moveScan = (layer) => {
    if (layer.position === 1) layer.inc = 1;
    if (layer.position === layer.range) layer.inc = -1;

    layer.position += layer.inc;

    return layer;
}

moveAllScan = (layers) => {
    layers.forEach(layer => moveScan(layer));
}

getMaxDepth = (layers) => Math.max(...layers.keys());

isCollision = (layer) => layer.position === 1;

getCollisionsDepths = (layers) => {
    let arr = [];
    for(position=0; position<=getMaxDepth(layers); position++) {
        if(layers.has(position) && isCollision(layers.get(position))) {
            arr.push(position);
        } 
        moveAllScan(layers);
    }

    return arr;
}

getSeverity = (layers, collisionLayers) => {
    return collisionLayers.reduce((acc, depth) => {
        return acc + layers.get(depth).range * depth;
    }, 0)
}


getSeverity(layers, getCollisionsDepths(layers));





