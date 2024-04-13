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

const initialState: StateProps[] = [
    {
        data: {
            category: "men's clothing",
            description:
                "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            id: 3,
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            price: 55.99,
            rating: { rate: 4.7, count: 500 },
            title: "Mens Cotton Jacket",
        },
        counter: 3,
    },
];

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
            state.slice(action.payload);
        },
    },
});

export const { addItemToCart, changeCounter, removeItemFromCart } =
    userCartSlice.actions;
export const userCartReducer = userCartSlice.reducer;
