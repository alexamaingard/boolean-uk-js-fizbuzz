const divBy3 = "Fizz";
const divBy5 = "Buzz";
const divBy7 = "Fish";
const divBy8 = "Bus";
let divByAll;

for (let i = 1; i < 102; i++){
    if (i%3 == 0 && i%5 == 0){
        console.log(divBy3 + divBy5);
    }
    else if (i%3 == 0) {
        console.log(divBy3);
    }
    else if (i%5 == 0) {
        console.log(divBy5);
    }
    else if (i%7 == 0) {
        console.log(divBy7);
    }
    else if (i%8 == 0) {
        console.log(divBy8);
    }
    else {
        console.log(i);
    }
}
for (let j = 101; ; j++) {
    if(j%3 == 0 && j%5 == 0 && j%7 == 0 && j%8 == 0) {
        divByAll = j;
        break;
    }
}
console.log(divByAll);