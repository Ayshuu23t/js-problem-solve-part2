const tallest = [20, 90, 73, 89, 59 ,37 ,56, 87, 98, 85, 96, 36 ];
function tallestNumber (numbers){
    let max = numbers[0];
    for (const  num of numbers){
        if( num > max){
            max = num;
        }
    }
    return max;
}

const tall = tallestNumber(tallest);
console.log('tallest number is', tall)