import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { marketData } from "../../interfaces/interfaces";

interface StateProps {
    data: marketData;
    counter: number;
}

interface changeCounter {
    action: 1 | -1;
    index: number;
}

const initialState: StateProps[] = [];

const userCartSlice = createSlice({
    name: "userCart",
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<marketData>) => {
            state.push({ data: action.payload, counter: 1 });
        },
        changeCounter: (state, action: PayloadAction<changeCounter>) => {
            state[action.payload.index].counter += action.payload.action;
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },
    },
});

export const { addItemToCart, changeCounter, removeItemFromCart } =
    userCartSlice.actions;
export const userCartReducer = userCartSlice.reducer;
