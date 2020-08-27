// This is just a Dummy model without a database, we would be using a variable to store data instead of a database. 
// The motive is just to clearly understand what a model is and how does it work we later will work with real databases like mysql and mangodb.


const products = [];

module.exports = class Product {
    constructor(t){
        this.title = t;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }
}

