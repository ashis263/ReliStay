import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectLabel } from "@radix-ui/react-select";

const SelectDemo: React.FC<{ maxGuests: number }> = ({ maxGuests }) => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Total Guests" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectLabel className="text-xs">Total Guests</SelectLabel>
          {[...Array(maxGuests)].map((_, index) => (
            <SelectItem key={index} value={(index+1).toString()}>{(index+1)}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { SelectDemo };
