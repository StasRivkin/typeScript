import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultQuote = {
    text: 'winter is comming',
}

const quoteSlice = createSlice({
    name: 'quote',
    initialState: defaultQuote,
    reducers: {
        putQuote(quote, action:PayloadAction<string>) {
            quote.text = action.payload;
        },
    }
})

export const { putQuote } = quoteSlice.actions;
export default quoteSlice.reducer;