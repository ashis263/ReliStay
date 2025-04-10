'use client';

import { useContext } from "react";
import { SearchContext } from "../providers/search-provider";

const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("SearchContext must be used within a SearchProvider");
    }
    return context;
}

export default useSearch;
