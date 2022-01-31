import React from "react";
import Highlighter from "react-highlight-words";
import "./TextBox.css";

const TextBox = props => {
  const { textContent, highlight, page, sourceName } = props;

  return (
    <div className="data-box">
      <div className="data-box__text-container">
        <Highlighter
          highlightClassName="highlight"
          searchWords={[highlight, /[0-9]*%/]}
          textToHighlight={textContent}
        />
      </div>
      <div className="data-box__content">
        <p className="source-name">{sourceName}</p>
        <span className="page-ref">Página {page}</span>
      </div>
    </div>
  );
};

export default TextBox;
