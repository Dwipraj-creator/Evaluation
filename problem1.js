let arr = 
[
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics", stock: 15 },
  { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", stock: 20 },



  { id: 3, name: "Blender", price: 49.99, category: "Kitchen", stock: 10 },
  { id: 4, name: "Coffee Maker", price: 89.99, category: "Kitchen", stock: 5 }
]

let product = arr.length
let totalValue = ((arr[0].price)*(arr[0].stock) ) + ((arr[1].price)*(arr[1].stock)) +  ((arr[2].price)*(arr[2].stock)) +  ((arr[3].price)*(arr[3].stock))
let average = ((arr[0].price + arr[1].price + arr[2].price + arr[3].price))/arr.length
console.log("Totalproduct :" , product)
console.log("totalValue:", totalValue)
console.log("average : ",average)