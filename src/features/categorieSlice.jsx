import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addCategorie, fetchCategories, deleteCategorie, editCategorie, fetchCategorieById } from "../services/CategorieService"


export const getCategorie = createAsyncThunk(
    "categorie/getCategorie",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetchCategories();

            return res.data;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const categorieSlice = createSlice({
    name: 'categorie',
    initialState: {
        categories: [],
        categorie: {},
        isLoading: false,
        success: null,
        error: null,
    },


    extraReducers: (builder) => {
        //get categories
        builder
            .addCase(getCategorie.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCategorie.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.categories = action.payload;
            })
            .addCase(getCategorie.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log("impossible de se connecter au serveur")
            })
    }
})

export default categorieSlice.reducer;