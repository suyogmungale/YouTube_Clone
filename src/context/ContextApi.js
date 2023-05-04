import React from "react"
import { createContext, useContext, useEffect, useState } from "react"

import { fetchDataFromApi } from '../utils/Api'

export const Context = createContext();

export const AppContext = (props) => {

    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory)
    }, [selectedCategory])

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then((contents) => {
            console.log(contents)
            setSearchResult(contents)
            setLoading(false)
        })
    }

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResult,
                setSearchResult,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu
            }}
        >
            {props.children}
        </Context.Provider>
    )

}
