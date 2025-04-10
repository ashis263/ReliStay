'use client';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import useSearch from "../hooks/use-search";

const Dropdown: React.FC = () => {
    const { setSortedBy } = useSearch();
    return (
        <div>
            <Select onValueChange={(e) => setSortedBy(e)}>
                <SelectTrigger className="min-w-40 lg:min-h-12">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Sort by</SelectLabel>
                        <SelectItem value="recent">Recent</SelectItem>
                        <SelectItem value="popular">Popular</SelectItem>
                        <SelectItem value="priceHigh">Price <span className="text-[10px]">(Highest first) </span></SelectItem>
                        <SelectItem value="priceLow">Price <span className="text-[10px]">(Lowest first) </span></SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

export default Dropdown;
