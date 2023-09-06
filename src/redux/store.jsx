import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import categoriesReducer from "../features/categorieSlice"
import scategoriesReducer from "../features/scategorieSlice"


const store = configureStore({
    reducer: {
        storearticles: articlesReducer,
        storecategories: categoriesReducer,
        storescategories: scategoriesReducer,
    }
})

export default store
