export type Product = {
    title: string;
    price: number;
    description: string;
}

export type User = {
    name: string
    /** This field represent the products the user own */
    products: Array<Product>
}