import { CartItemType } from "../redux/slices/cartSlice.ts"

export const calcTotalPrice = (items: CartItemType[]) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}