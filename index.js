const divBy3 = "Fizz";
const divBy5 = "Buzz";
const divBy7 = "Fish";
const divBy8 = "Bus";

for (let i = 1; i < 101; i++){
    //CHALLENGE 2?
    if(i%3 == 0 && i%5 == 0 && i%7 == 0 && i%8 == 0) {
        console.log(i);
        break;
    }
    //
    else if (i%3 == 0 && i%5 == 0){
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