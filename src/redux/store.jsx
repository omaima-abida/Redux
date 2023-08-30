import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import categoriesReducer from "../features/categorieSlice"


const store = configureStore({
    reducer: {
        storearticles: articlesReducer,
        storecategories: categoriesReducer,
    }
})

export default store
