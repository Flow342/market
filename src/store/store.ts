import { configureStore } from "@reduxjs/toolkit";
import { userCartReducer } from "./reducers/reducer";

const store = configureStore({
    reducer: {
        market: userCartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
