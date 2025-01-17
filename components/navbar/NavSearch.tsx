"use client";

import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const searchValue = searchParams.get("search")?.toString() || "";

  const [search, setSearch] = useState(searchValue);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    replace(`/products?${params.toString()}`);
  }, 500);

  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  return (
    <div className="relative max-w-xs">
      <FiSearch className="absolute right-3 top-[18px] transform -translate-y-1/2 text-muted-foreground cursor-pointer" />
      <Input
        type="search"
        placeholder="Search"
        className="dark:bg-muted"
        onChange={(e) => {
          const value = e.target.value;
          setSearch(value);
          handleSearch(value);
        }}
        value={search}
      />
    </div>
  );
}

export default NavSearch;
