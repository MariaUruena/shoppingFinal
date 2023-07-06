let products = [];

products.push({
  name: 'Carton of Cherries',
  price: 4.0,
  quantity: 0,
  productId: 1,
  image: './images/cherry.jpg'
});

products.push({
  name: 'Bag of Oranges',
  price: 10.0,
  quantity: 0,
  productId: 2,
  image: './images/orange.jpg'
});

products.push({
  name: 'Carton of Strawberries',
  price: 5.0,
  quantity: 0,
  productId: 3,
  image: './images/strawberry.jpg'
});

let cart = [];

addProductToCart = (productId) => {
  const product = products.find(product => product.productId === productId);
  if (product) {
    product.quantity++;
    if (!cart.includes(product)) {
      cart.push(product);
    }
  }
}

increaseQuantity = (productId) => {
  const product = products.find(product => product.productId === productId);
  if (product) {
    product.quantity++;
  }
}

decreaseQuantity = (productId) => {
  const index = cart.findIndex(product => product.productId === productId);
  if (index !== -1) {
    const product = cart[index];
    product.quantity--;
    if (product.quantity === 0) {
      cart.splice(index, 1);
    }
  }
};

removeProductFromCart = (productId) => {
  const index = cart.findIndex(product => product.productId === productId);
  if (index !== -1) {
    const product = cart[index];
    product.quantity = 0;
    cart.splice(index, 1);
  }
};

cartTotal = () => {
  let total = 0;
  cart.forEach(product => {
    total += product.price * product.quantity;
  });
  return total;
} 

emptyCart = () => {
  cart.length = 0;
  products.forEach(product => {
    product.quantity = 0;
  });
}

let totalPaid = 0;
pay = (amount) => {
  totalPaid += amount;
  return totalPaid - cartTotal();
}

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
}
