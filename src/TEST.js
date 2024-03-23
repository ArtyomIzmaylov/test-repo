const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.split('\n');

const [p, v] = lines[0].split(' ');
const [q, m] = lines[1].split(' ');


const P = Number(p)
const V = Number(v)

const Q = Number(q)
const M = Number(m)


let maxPV = P + V
let minPV = P - V

let maxQM = Q + M
let minQM = Q - M

let c = 0

if (minPV > maxQM || maxPV < minQM) { //1, 1.1 и 1.2
    for (let i = minPV; i <= maxPV; i++) {
        c+=1
    }
    for (let i = minQM; i <= maxQM; i++) {
        c+=1
    }
}

else if (minQM <= minPV && maxQM <= maxPV) { //2.1
    console.log('C')
    for (let i = minQM; i <= maxPV; i++) {
        c+=1
    }
}

else if (minPV <= minQM && maxPV <= maxQM) { //2.3
    for (let i = minPV; i <= maxQM; i++) {
        c+=1
    }
}

else if (minPV <= minQM && maxQM <= maxPV) { // 2.2
    for (let i = minPV; i <= maxPV; i++) {
        c+=1
    }
}

else if (minPV >= minQM && maxQM >= maxPV) { // 2.4
    for (let i = minQM; i <= maxQM; i++) {
        c+=1
    }
}



console.log(c)

fs.writeFileSync("output.txt", c.toString())