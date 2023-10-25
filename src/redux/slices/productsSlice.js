const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    products: [],
}

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    let res = await fetch("https://dummyjson.com/products")
    res = await res.json();
    return res
})

const Slice = createSlice({
    name: "addProductSlice", 
    initialState, 
    reducers: {
        addProducts: (state, action)=> {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.products.push(data)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isloading = false,
            state.products = action.payload
        })
    }
})

export const { addProducts } = Slice.actions

export default Slice.reducer;