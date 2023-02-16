const productsArr = [
    {
        id: "price_1McAgY4beExhVVLKT5nJ50Sb",
        title: "Product1",
        price: 5
    },
    {
        id: "price_1McAh74beExhVVLKAau92Zdp",
        title: "Product2",
        price: 10
    },
    {
        id: "3",
        title: "Product3",
        price: 15
    }
]

function getProductData(id){
    let productData = productsArr.find(product => product.id === id)
    if (productData == undefined){
        console.log(`${id} doesnt exist`)
    }
    return productData
}


export {productsArr, getProductData}