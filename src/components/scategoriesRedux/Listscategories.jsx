import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getSCategories } from "../../features/scategorieSlice";
import AfficheScategories from "./AfficheScategories";
const Listscategories = () => {
    const dispatch = useDispatch();
    const initFetch = useCallback(() => {
        dispatch(getsCategories());
    }, [dispatch])
    useEffect(() => {
        initFetch()
    }, [initFetch])
    return (
        <div>
            <AfficheScategories />
        </div>
    )
}
export default Listscategories