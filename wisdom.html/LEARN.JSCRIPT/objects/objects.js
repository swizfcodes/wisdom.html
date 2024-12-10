//An object groups multiple values together.

const product = {
    name: 'socks',
    price: 1050
}
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'cottonsocks';
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);

//why do we use object?
//1) Allow us use and group multiple vales together.
//2) Makes our code  more organized.