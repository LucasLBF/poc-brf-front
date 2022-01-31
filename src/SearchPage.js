import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import TextBox from "./TextBox";
import "./SearchPage.css";

const SearchPage = () => {
  const [fetchedData, setFetchedData] = useState({ results: [] });
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    fetchData(keywords);
  }, [keywords]);

  async function fetchData(keyword) {
    const resp = await fetch("http://localhost:5000/", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ kwrd: keyword }),
    });
    const data = await resp.json();
    console.log(data);
    setFetchedData(data);
  }

  return (
    <>
      <Navbar setKeywords={setKeywords} />
      {fetchedData && (
        <>
          <p className="results-text">
            {fetchedData.count} trecho(s) encontrado(s)
          </p>
          <div className="container">
            {fetchedData.results.map(data => (
              <TextBox
                textContent={data.content}
                highlight={data.highlight}
                page={data.page}
                sourceName={data.source}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SearchPage;
