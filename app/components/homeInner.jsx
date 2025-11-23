"use client";

import { useState } from "react";
import Categories from "./categories";
import ConnectorsAndCommunities from "./connectorsAndCommunities";
import Filters from "./filters";
import Search from "./search";
import SearchResults from "./searchResults";

export default function HomeInner() {
  const [text, setText] = useState("");
  const [filters, setFilters] = useState({
    category: null,
    connectorType: null,
    platform: null,
    communityType: null
  });

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Search text={text} setText={setText} />
      <Filters filters={filters} setFilters={setFilters} />

      {text?.length > 0 ?
        <SearchResults searchText={text} /> :
        <div className="space-y-8">
          <Categories />
          <ConnectorsAndCommunities filters={filters} />
        </div>
      }
    </div>
  );
}
