import React from "react";
import "./ArtistCard.css";

const ArtistCard = ({ artist }) => {
  return (
    <div className="artist-card">
      <div className="artist-photo-container">
        <img src={artist.photo} alt={artist.name} className="artist-photo" />
      </div>
      <h3>{artist.name}</h3>
      <p>Sentimen Positif: {artist.sentimentPositive}</p>
      <p>Sentimen Negatif: {artist.sentimentNegative}</p>
    </div>
  );
};

export default ArtistCard;
