import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Funnel } from "lucide-react";
import Filters from "./Filters";

const FilterDrawer: React.FC = () => {
    return (
        <div>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline"><Funnel /></Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle className="text-primary text-2xl">All filters</DrawerTitle>
                            <DrawerDescription>Filter by location, price, type or rating</DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            <Filters />
                            <DrawerClose asChild>
                                <Button variant="secondary" className="mt-3">Filter</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
}

export default FilterDrawer;
