"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import qs from "query-string";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const params = useSearchParams();

  const [inputValue, setInputValue] = useState("");

  const onSearchChange = useCallback(() => {
    if (inputRef.current) {
      setInputValue(inputRef.current.value);
    }

    // if(inputValue === "") {

    // }
  }, []);

  const handleSearch = useCallback(async () => {
    if (!inputRef.current?.value) {
      return;
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      tag: inputValue,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);

    console.log("search: ", inputValue);
  }, [inputValue, params, router]);

  const handlekeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }

    return handleSearch();
  };

  return (
    <div
      className={`w-full p-2 flex flex-row items-center justify-between bg-neutral-300/40 border border-white hover:border-neutral-300/70 focus-within:bg-white focus-within:border-neutral-300/70 rounded-lg transition`}
    >
      <input
        ref={inputRef}
        onChange={onSearchChange}
        onKeyDown={(e) => handlekeyPress(e)}
        placeholder="Search images by tag"
        className={`w-full outline-none text-sm font-normal placeholder:text-sm placeholder:font-light placeholder:text-black bg-transparent`}
      />
      <div onClick={handleSearch} className="p-1 cursor-pointer">
        <IoSearch size={16} className="text-neutral-600/70" />
      </div>
    </div>
  );
};

export default Search;
