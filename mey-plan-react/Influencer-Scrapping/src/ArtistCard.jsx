import React from "react";
import "./ArtistCard.css";

const ArtistCard = ({ artist }) => {
  return (
    <div className="card">
      <div className="card2">
        <div className="artist-photo-container">
          <img src={artist.photo} alt={artist.name} className="artist-photo" />
        </div>
        <div className="artist-info">
          <h3>Artist Name: {artist.name}</h3>
          <p>Sentimen Positif: {artist.sentimentPositive}</p>
          <p>Sentimen Negatif: {artist.sentimentNegative}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
