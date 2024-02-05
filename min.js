const cheapest = [70000, 40000, 699999, 49999, 30000, 50000];

function minNumbers(numbers){
    let min = numbers[0];
    for (num of numbers){
        if (num < min){
            min = num;
        }
    }
    return min;
}

const Cheap = minNumbers(cheapest);
console.log('Cheapest phone is', Cheap);