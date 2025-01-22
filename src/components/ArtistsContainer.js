import React from 'react';
import './Artistcontainer.css';

const ArtistsContainer = () => {
  const artists = [
    { id: 1, name: 'Artist 1', imgSrc: 'artist1.jpg' },
    { id: 2, name: 'Artist 2', imgSrc: 'artist2.jpg' },
    { id: 3, name: 'Artist 3', imgSrc: 'artist3.jpg' },
  ];

  return (
    <section className="artists">
      <h1>Top Artists</h1>
      <div className="artist-container">
        {artists.map((artist) => (
          <div key={artist.id} className="artist">
            <img src={artist.imgSrc} alt={artist.name} />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistsContainer;
