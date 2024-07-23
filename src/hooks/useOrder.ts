import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"


export default function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([]) //con el ordenItem hace que el order sea del tipo ordenItem

    const addItem = (item : MenuItem) => {
        console.log(item)
    }


    return {
        addItem
    }
}