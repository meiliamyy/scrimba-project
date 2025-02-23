import { useState, useEffect } from "react";
import artistAImage from "./assets/san1.jpeg";
import artistBImage from "./assets/san2.jpeg";
import artistCImage from "./assets/san3.jpeg";
import ArtistCard from "./ArtistCard";
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
  ]);

  const [sortedArtists, setSortedArtists] = useState([]);

  const sortArtists = (data) => {
    return data.sort((a, b) => b.sentimentPositive - a.sentimentPositive);
  };

  const handleSortChange = () => {
    setSortedArtists(sortArtists([...artists]));
  };

  useEffect(() => {
    setSortedArtists(sortArtists([...artists]));
  }, [artists]);

  return (
    <div className="App">
      <header>
        <h1>Data Public Figure & Artis</h1>
        <button onClick={handleSortChange}>Sort Ulang</button>
        <button>Search by Name</button>
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
