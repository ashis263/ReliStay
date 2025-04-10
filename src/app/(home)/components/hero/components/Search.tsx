"use client";

import useSearch from "@/app/(home)/homestays/hooks/use-search";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { FormEvent } from "react";

const Search: React.FC = () => {
  const { setSearchKey } = useSearch();
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let key = formData.get("searchKey");
    if(!key){
        key = '';
    }
    if(key instanceof File){
        return;
    }
    setSearchKey(key);
    redirect('/homestays');
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSearch}>
        <Input
          type="text"
          name="searchKey"
          className="text-sm lg:h-12 placeholder:text-gray-100 border-0 border-primary !border-b-2 text-center text-white w-80 mx-auto"
          placeholder="Add Keywords like Name or Location"
        />
        <Button type="submit" className="w-60 lg:h-12 rounded-full my-2">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
