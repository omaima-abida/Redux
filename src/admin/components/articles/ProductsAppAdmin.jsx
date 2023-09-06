import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getArticles } from "../../../features/articleSlice";
import Createarticle from './Createarticle';


import AfficheArticleTable from './AfficheArticleTable';
const ProductsAppAdmin = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getArticles());
    }, [])
    return (
        <div>
            <Createarticle />
            <AfficheArticleTable />

        </div>
    )
}
export default ProductsAppAdmin