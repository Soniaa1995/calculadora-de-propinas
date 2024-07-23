export type MenuItem = {
    id: number, 
    name: string,
    price: number
}

export type OrderItem = MenuItem & { //menuItem y el & es para coger todo lo anterior, es decir el order tiene todo lo anterior mas el quantity
    quantity: number
}