import moneyReducer from "../reducers/moneyReducer";
import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../reducers/quoteReducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        account: moneyReducer,
        quote: quoteReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;