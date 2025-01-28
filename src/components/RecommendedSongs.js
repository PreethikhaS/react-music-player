import React from 'react';
import './RecommendedSongs.css';

const RecommendedSongs = () => {
  const songs = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', imgSrc: 'song1.jpg' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', imgSrc: 'song2.jpg' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', imgSrc: 'song3.jpg' },
  ];

  return (
    <section className="recommended-songs">
      <h1>Recommended Songs</h1>
      <div className="song-container">
        {songs.map((song) => (
          <div key={song.id} className="song">
            <div className="song-img">
              <img src={song.imgSrc} alt={song.title} />
              <div className="overlay">▶</div>
            </div>
            <div>
              <h2>{song.title}</h2>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedSongs;
