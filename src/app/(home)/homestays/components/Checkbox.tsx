"use client"

import { Checkbox } from "@/components/ui/checkbox"
import useSearch from "../hooks/use-search"

interface Filterby {
  [key: string]: string
}

const CheckboxDemo: React.FC<{ filterBy: Filterby }> = ({ filterBy }) => {
  const { selectedFilters, setSelectedFilters } = useSearch();
  const handleFilters = (isChecked: boolean, value: Filterby) => {
    if (isChecked) {
      setSelectedFilters([...selectedFilters, value])
    } else {
      const newSelected = selectedFilters.filter(item => JSON.stringify(item) !== JSON.stringify(value))
      setSelectedFilters([...newSelected]);
    }
  }
  return (
    <div className="flex items-center space-x-2 text-xs">
      <Checkbox
        onCheckedChange={(isChecked) => handleFilters(!!isChecked, filterBy)}
        id={Object.values(filterBy)[0]} />
      <label
        htmlFor={Object.values(filterBy)[0]}
        className="text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {(Object.values(filterBy)[0]).toUpperCase()}
      </label>
    </div>
  )
}

export default CheckboxDemo;