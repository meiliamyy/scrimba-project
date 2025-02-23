import { useState, useEffect } from "react";
import artistAImage from "./assets/san1.jpeg";
import artistBImage from "./assets/san2.jpeg";
import artistCImage from "./assets/san3.jpeg";
import ArtistCard from "./ArtistCard";
import SortButtons from "./SortButton";
import SearchByName from "./SearchbyName";
import "./App.css";

function App() {
  const [artists] = useState([
    {
      id: 1,
      name: "Artist A",
      photo: artistAImage,
      sentimentPositive: 120,
      sentimentNegative: 30,
    },
    {
      id: 2,
      name: "Artist B",
      photo: artistBImage,
      sentimentPositive: 80,
      sentimentNegative: 50,
    },
    {
      id: 3,
      name: "Artist C",
      photo: artistCImage,
      sentimentPositive: 200,
      sentimentNegative: 20,
    },
    {
      id: 4,
      name: "Artist D",
      photo: artistCImage,
      sentimentPositive: 200,
      sentimentNegative: 20,
    },
    {
      id: 5,
      name: "Artist D",
      photo: artistCImage,
      sentimentPositive: 200,
      sentimentNegative: 20,
    },
    {
      id: 6,
      name: "Artist D",
      photo: artistCImage,
      sentimentPositive: 200,
      sentimentNegative: 20,
    },
    {
      id: 7,
      name: "Artist D",
      photo: artistCImage,
      sentimentPositive: 200,
      sentimentNegative: 20,
    },
    {
      id: 8,
      name: "Artist D",
      photo: artistCImage,
      sentimentPositive: 200,
      sentimentNegative: 20,
    },
  ]);

  const [sortedArtists, setSortedArtists] = useState([]);

  // Fungsi sorting untuk sentiment positive (high to low)
  const sortBySentimentPositive = (data) => {
    return data.sort((a, b) => b.sentimentPositive - a.sentimentPositive);
  };

  // Fungsi sorting untuk sentiment negative (high to low)
  const sortBySentimentNegative = (data) => {
    return data.sort((a, b) => b.sentimentNegative - a.sentimentNegative);
  };

  // Handler untuk tombol sort positive
  const handleSortPositive = () => {
    setSortedArtists(sortBySentimentPositive([...artists]));
  };

  // Handler untuk tombol sort negative
  const handleSortNegative = () => {
    setSortedArtists(sortBySentimentNegative([...artists]));
  };

  // Handler untuk pencarian berdasarkan nama
  const handleSearch = (query) => {
    const filtered = artists.filter((artist) => artist.name.toLowerCase().includes(query.toLowerCase()));
    // Setelah filtering, kita bisa mengurutkan hasilnya (misal, default sort by positive)
    setSortedArtists(sortBySentimentPositive([...filtered]));
  };

  // Saat komponen mount, set default sorting berdasarkan sentiment positive
  useEffect(() => {
    setSortedArtists(sortBySentimentPositive([...artists]));
  }, [artists]);

  return (
    <div className="App">
      <header>
        <h1>Data Public Figure & Artis</h1>
        <div className="controls">
          {/* Komponen Sorting */}
          <SortButtons onSortPositive={handleSortPositive} onSortNegative={handleSortNegative} />
          {/* Komponen Searching */}
          <SearchByName onSearch={handleSearch} />
          {/* <ButtonUsage onSearch={handleSearch} /> */}
        </div>
      </header>
      <main>
        <div className="grid-container">
          {sortedArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
