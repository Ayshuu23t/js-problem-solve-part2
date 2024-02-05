// how to get max number
// conditional part
const mili = 90;
const lili = 91;

if(lili > mili){
    console.log('lili is the first girl');
}
else if(lili = mili){
    console.log('they are both first girl')
}
else {
    console.log('mili is the first girl');
}

// another type
//inside function part
function maxNumber (num1, num2){
    if(num1 > num2){
        return num1;
    }
       else{
         return  num2;
       }
    }


const max = maxNumber(99, 97);
const getMax = maxNumber(98, 97);
const ultraMax = maxNumber(99, 97);
console.log('max number is:', ultraMax);

// 

const mim = 99;
const jim = 90;
const vim = 96;

if (mim > jim  && mim > vim){
    console.log('mim is the boss');
}
else if (jim > mim  && jim > vim){
    console.log('jim is the boss');
}
else{
    console.log('tim is the boss');
}

// inside function

function maxOfThree(num1, num2, num3){
     if(num1 > num2 && num1 > num3){
        return num1;
     }
     else if(num2 > num1 && num2 > num3){
        return num2;
     }
     else {
        return num3
     }
}

const maxx = maxOfThree (56, 60, 75);
console.log('MAx number is:', maxx)

// using max function

const maxNumbers = Math.max(40, 56, 79 ,69, 38, 90, 37, 47);
console.log('Max Numbers:', maxNumbers)