"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MealSearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Debounce the search to avoid too many URL updates
      const searchQuery = { search };
      const urlQuery = new URLSearchParams(searchQuery);

      // Remove the query parameter if the search is empty
      const url = search ? `${pathname}?${urlQuery}` : pathname;
      router.push(url);

    // Cleanup the timeout
  }, [search, pathname, router]);

  return (
    <div>
      <input
        className="border-2 rounded-md py-2 w-72 pl-3"
        placeholder="Search Here"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
      />
    </div>
  );
};

export default MealSearch;