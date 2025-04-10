'use client';

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import useSearch from "../hooks/use-search";

const Search: React.FC = () => {
    const {setSearchKey} = useSearch();
    return (
        <div className="w-full">
            <SearchIcon className="text-gray-500 w-4 absolute top-[6px] sm:top-[14px] lg:top-8 left-4 lg:left-8" />
            <Input onChange={(e) => setSearchKey(e.target.value)} type="text" className="pl-8 sm:pl-8 lg:pl-12 text-sm lg:h-12" placeholder="Area/Property" />
        </div>
    );
}

export default Search;
