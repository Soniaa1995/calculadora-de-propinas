import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"


export default function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([]) //con el ordenItem hace que el order sea del tipo ordenItem

    const [propina, setPropina] = useState(0)

    const addItem = (item : MenuItem) => {
        
        const itemExsit = order.find(orderItem => orderItem.id === item.id)
        if(itemExsit){
            const updateOrder = order.map(orderItem => 
                orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity +1} : orderItem
            ) 
            setOrder(updateOrder)
            //ya sabe que existe pero tiene que identificar el elemento repetido
            //este codigo: toma copia de nuestra orden, pero en la propiedad e cantidad, lo toma y lo incrementa en 1

        } else{
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }


    return {
        order,
        propina, 
        setPropina,
        addItem,
        removeItem
    }
}