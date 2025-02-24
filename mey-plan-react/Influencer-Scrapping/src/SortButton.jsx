import React from "react";
import "./SortButton.css";

const SortButtons = ({ onSortPositive, onSortNegative }) => {
  return (
    <div className="sort-buttons">
      <button className="btn" onClick={onSortPositive}>
        Sort by Sentiment Positive (High to Low)
      </button>
      <button className="btn" onClick={onSortNegative}>
        Sort by Sentiment Negative (High to Low)
      </button>
    </div>
  );
};

export default SortButtons;
