'use client'

import { Button } from "@/components/ui/button";
import Search from "./Search";
import Dropdown from "./Dropdown";
import FilterDrawer from "./FilterDrawer";
import useSearch from "../hooks/use-search";

const TopBar: React.FC = () => {
    const {sortedBy, setSortedBy} = useSearch();
    const handleSortBy = (sortBy: string) => {
        setSortedBy(sortBy);
    }
    return (
        <div className="flex justify-between lg:h-12 sm:border-2 rounded-lg relative gap-2">
            <div className="sm:hidden">
                <Search />
            </div>
            <div className="sm:hidden">
                <Dropdown />
            </div>
            <div className="sm:hidden">
                <FilterDrawer />
            </div>
            <div className="hidden sm:flex w-full justify-between px-2">
                <div className="flex justify-between items-center w-20">
                    <h4 className="text-sm">Sort By</h4>
                </div>
                <div className="flex justify-between items-center flex-1">
                    <Button onClick={() => handleSortBy('recent')} variant="secondary" className={`${sortedBy === 'recent' ? 'bg-primary text-white hover:bg-primary' : ''}`}>Recent</Button>
                    |
                    <Button onClick={() => handleSortBy('popular')} variant="secondary" className={`${sortedBy === 'popular' ? 'bg-primary text-white hover:bg-primary' : ''}`}>Popular</Button>
                    |
                    <Button onClick={() => handleSortBy('priceHigh')} variant="secondary" className={`${sortedBy === 'priceHigh' ? 'bg-primary text-white hover:bg-primary' : ''}`}>Price <span className="text-[10px]">(Highest first)</span></Button>
                    |
                    <Button onClick={() => handleSortBy('priceLow')} variant="secondary" className={`${sortedBy === 'priceLow' ? 'bg-primary text-white hover:bg-primary' : ''}`}>Price <span className="text-[10px]">(Lowest first)</span></Button>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
