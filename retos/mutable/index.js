const products = [
  { title: 'Pizza', price: 121, id: '🍕'},
  { title: 'Burger', price: 121, id: '🍔'},
  { title: 'Hot cakes', price: 121, id: '🥞'},
];

const myProducts = [];
console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

const newProducts = products.map(item => ({...item}));

const productIndex = newProducts.findIndex(item => item.id === '🍔');

if (productIndex != -1) {
  myProducts.push(newProducts[productIndex]);
  newProducts.splice(productIndex, 1)
}

console.log('products', products);
console.log('newProducts', newProducts);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));
