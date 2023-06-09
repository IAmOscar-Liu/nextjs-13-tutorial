import React from "react";
import agent from "@/agent";
import fetch from "isomorphic-fetch";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`,
    {
      // @ts-ignore
      agent,
    }
  );

  const data: SearchResult = await res.json();
  return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  // throw Error("Oops! something went wrong!");
  const searchResults = await search(searchTerm);
  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>
      <ol className="space-y-5 p-5">
        {searchResults.organic_results.map((result) => (
          <li className="list-decimal" key={result.position}>
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;
