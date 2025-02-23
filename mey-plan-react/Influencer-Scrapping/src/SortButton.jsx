import React from "react";

const SortButtons = ({ onSortPositive, onSortNegative }) => {
  return (
    <div className="sort-buttons">
      <button onClick={onSortPositive}>Sort by Sentiment Positive (High to Low)</button>
      <button onClick={onSortNegative}>Sort by Sentiment Negative (High to Low)</button>
    </div>
  );
};

export default SortButtons;
