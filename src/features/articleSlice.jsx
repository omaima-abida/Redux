import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchArticles, addArticle, deleteArticle, editArticle, fetchArticleById } from "../services/ArticleService"


export const getArticles = createAsyncThunk(
    "article/getArticles",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetchArticles();

            return res.data;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        articles: [],
        article: {},
        isLoading: false,
        success: null,
        error: null,
    },


    extraReducers: (builder) => {
        //get articles
        builder
            .addCase(getArticles.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.articles = action.payload;
            })
            .addCase(getArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log("impossible de se connecter au serveur")
            })
    }
})

export default articleSlice.reducer;