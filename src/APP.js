

let P = 0
let V = 7

let Q = 12
let M = 5

let c = 0

let maxPV = P + V // 7
let minPV = P - V // -7

let maxQM = Q + M // 17
let minQM = Q - M // 7

let c = 0;


if (minPV > maxQM || maxPV < minQM) {
    for (let i = minPV; i < maxPV + 1; i++) {
        c+=1
    }
    for (let i = minQM; i < maxQM; i++) {
        c+= 1
    }
} //1

if (minPV >= minQM && maxPV <= maxQM) {
    for (let i = minQM; i < maxQM + 1; i++) {
        c+=1
    }
} //2

if (minPV <= minQM && maxPV >= maxQM) { //3
    for (let i = minPV; i < maxPV + 1; i++) {
        c+=1
    }
}

