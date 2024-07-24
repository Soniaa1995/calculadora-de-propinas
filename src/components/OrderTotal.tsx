import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[],
    propina: number,
    placeOrder: () => void
}


export default function OrderTotal({order, propina, placeOrder} : OrderTotalProps) {

    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]) //solo se renderiza el codigo cuando cambie la dependencia el useMemo
    const propinaAmount = useMemo(() => subTotalAmount * propina, [propina, order])
    const totalAmount = useMemo(() => subTotalAmount + propinaAmount, [propina, order])

  return (
    
    <>
        <div className="space-y-3">
            <h2 className="font-bold text-2xl">Totales y propina</h2>
            <p>Subtotal a pagar:
                <span className="font-bold"> {formatCurrency(subTotalAmount)}</span>
            </p>

            <p>Propina:
                <span className="font-bold"> {formatCurrency(propinaAmount)}</span>
            </p>

            <p>Total a pagar:
                <span className="font-bold"> {formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button className="w-full bg-cyan-300 p-3 uppercase text-black font-bold mt-10 disabled:opacity-15"
                disabled={totalAmount === 0}
                onClick={placeOrder}
                        
        >
            Guardar orden
        </button>
    </>

  )
}
