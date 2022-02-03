import React, { useState } from "react";
import Navbar from "./Navbar";
import TextBox from "./TextBox";
import ImageBox from "./ImageBox";
import "./SearchPage.css";
import CircularProgress from "@mui/material/CircularProgress";

const SearchPage = () => {
  const [fetchedData, setFetchedData] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(keyword) {
    const resp = await fetch("http://localhost:5000/", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ kwrd: keyword }),
    });
    const data = await resp.json();
    setIsLoading(false);
    setFetchedData(data);
  }

  return (
    <>
      <Navbar fetchData={fetchData} setIsLoading={setIsLoading} />
      {isLoading && (
        <div className="loading-spinner-container">
          <CircularProgress size="100px" />
        </div>
      )}
      {fetchedData.results.length > 0 && !isLoading && (
        <>
          <p className="results-text">
            {fetchedData.count} resultados(s) encontrado(s)
          </p>
          <div className="container">
            {fetchedData.results.map(data => {
              if (data.type === "text") {
                return (
                  <TextBox
                    textContent={data.content}
                    highlight={data.highlight}
                    page={data.page}
                    sourceName={data.source}
                  />
                );
              } else {
                return (
                  <ImageBox
                    filename={data.filename}
                    sourceName={data.source}
                    page={data.page}
                  />
                );
              }
            })}
          </div>
        </>
      )}
    </>
  );
};

export default SearchPage;
