import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { getCartFormLS } from '../../utils/getCartFormLS.ts';
import { calcTotalPrice } from '../../utils/calcTotalPrice.ts';


export type CartItemType = {
  id: string | number
  title: string
  type: string
  price: number
  count: number
  imageUrl: string
  size: number
}

interface CartSliceState {
  totalPrice: number
  items: CartItemType[]
}

const { items, totalPrice } = getCartFormLS()

const initialState: CartSliceState = {
  totalPrice,
  items,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items)
    },

    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      
      if (findItem) {
        findItem.count--;
      }
    },

    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0
    },
  },
})

export const selectCart = (state:RootState) => state.cart
export const selectCartItemById = (id: string) => (state:RootState) => state.cart.items.find(obj => obj.id === id)

export const { addItem, minusItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
