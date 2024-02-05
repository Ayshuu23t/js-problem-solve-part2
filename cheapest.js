const mobile = [
    {name :'samusung', price : 28000, model: 'A35', color: 'red' },
    {name :'vivo', price : 25000, model: 'A30', color: 'green' },
    {name :'oppo', price : 28000, model: 'A35', color: 'red' },
    {name :'realme', price : 35000, model: 'A35', color: 'red' },
    {name :'walton', price : 20000, model: 'A35', color: 'red' },
    {name :'i-phone', price : 200000, model: 'A35', color: 'red' }
]
function getCheapestPhone(phones){
    let cheap = phones[0];
    for(const phone of phones){
       if(phone.price < cheap.price){
        cheap = phone;
       }
    }
    return cheap;
}
const cheapest = getCheapestPhone(mobile);
console.log('cheapet phone is', cheapest)