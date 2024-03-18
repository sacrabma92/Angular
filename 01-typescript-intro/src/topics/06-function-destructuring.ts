
interface Product {
    description: string;
    price: number;
}


const phone: Product = {
    description: 'Nokia A1',
    price: 250
}

const table: Product = {
    description: 'iPad Air',
    price: 430
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation( {tax, products} : TaxCalculationOptions ) : [number, number]{
function taxCalculation( opcions : TaxCalculationOptions ) : [number, number]{
    const {tax, products } = opcions
    let total = 0;
    products.forEach( ({ price }) => {
        total += price;
    })
    return [ total, total * tax ]
}

const shoppingCart = [phone, table];
const tax = 0.15;

const [ total, taxTotal ] = taxCalculation({
    products: shoppingCart,
    tax
})

console.log('Total: ', total)
console.log('Tax: ', taxTotal)



export {}