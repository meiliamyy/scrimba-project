import { useState } from "react";
import Button from "@mui/material/Button";
import "./SearchbyName.css";

const SearchByName = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="search-box">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name..." />
      <Button onClick={handleSearchClick}>Search</Button>
    </div>
  );
};

export default SearchByName;
