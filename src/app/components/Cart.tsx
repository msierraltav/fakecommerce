"use client"
import {useAppDispatch, useAppSelector} from "@/hooks/useReduxHooks";

export default function  Cart(){

    const cartItems = useAppSelector(state => state.cartReducer.items);
    const totalCost : number = cartItems.reduce((acc, item) => acc + item.price, 0)
    
    return (
        <div className="text-base">
            <h1> 🛒 $ {totalCost.toFixed(2)}</h1>
        </div>
    )
}