import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../../features/categorieSlice";
import AfficheCategories from "./AfficheCategories";
const Listcategories = () => {
    const dispatch = useDispatch();
    const initFetch = useCallback(() => {
        dispatch(getCategories());
    }, [dispatch])
    useEffect(() => {
        initFetch()
    }, [initFetch])
    return (
        <div>
            <AfficheCategories />
        </div>
    )
}
export default Listcategories