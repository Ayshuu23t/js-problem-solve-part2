const products = [
    {name:'shirt' , price: 800, quantity: 2},
    {name:'hijab' , price: 250, quantity: 3},
    {name:'brooch' , price: 150, quantity: 4},
    {name:'pant' , price: 300, quantity: 2},
    {name:'comb' , price: 100, quantity: 1}
]
function getProduct(products){
    let total = 0;
    for(const product of products ){
        const productQuantity = product.price * product.quantity
       total = total + productQuantity
    }
    return total;
}
const prices = getProduct(products);
console.log(prices)