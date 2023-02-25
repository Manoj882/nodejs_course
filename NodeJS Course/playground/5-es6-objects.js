//object property shorthand

const userName = 'Manoj';
const userAge = 25;

const user = {
    userName,
    userAge,
    location: 'Kathmandu',
};

console.log(user);


//object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 3.5,
    
};

// const label = product.label;
// const stock = product.stock;

// const {label: productLabel, stock, rating = 5} = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, {label, price, stock}) => {
    console.log(type, label, price, stock);
    
};

transaction('order', product);


