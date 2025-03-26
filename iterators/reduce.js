const myNum=[1,2,3,4]
const myTotal=myNum.reduce(function(acc,currval){
    console.log(`acc value: ${acc}, currval value ${currval}`)
    return acc+currval;
},0)

const ShoppingCart=[
    {
        itemName:"js course",
        Price:299
    },
    {
        itemName:"ruby course",
        Price:599
    },
    {
        itemName:"ap development",
        Price:1299
    }
]
//suppose we need to add the shopping cart values, we can use the reduce function
const PriceToPay= ShoppingCart.reduce(function(acc, item){
    return acc+item.Price;

},0)
console.log(PriceToPay)