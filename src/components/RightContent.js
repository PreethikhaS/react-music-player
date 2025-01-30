import React from 'react';
import './Rightcontent.css';

const RightContent = () => {
  const trendingSongs = [
    { id: 1, title: 'Trending Song 1', artist: 'Artist 1', imgSrc: 'trending1.jpg' },
    { id: 2, title: 'Trending Song 2', artist: 'Artist 2', imgSrc: 'trending2.jpg' },
    { id: 3, title: 'Trending Song 3', artist: 'Artist 3', imgSrc: 'trending3.jpg' },
  ];

  const recentPlaylists = [
    { id: 1, name: 'Chill Vibes', imgSrc: 'playlist1.jpg' },
    { id: 2, name: 'Workout Hits', imgSrc: 'playlist2.jpg' },
  ];

  return (
    <aside className="right-content">
      <section className="trending-songs">
        <h2>Trending Songs</h2>
        <div className="trending-list">
          {trendingSongs.map((song) => (
            <div key={song.id} className="trending-item">
              <img src={song.imgSrc} alt={song.title} />
              <div>
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="recent-playlists">
        <h2>Recent Playlists</h2>
        <div className="playlist-list">
          {recentPlaylists.map((playlist) => (
            <div key={playlist.id} className="playlist-item">
              <img src={playlist.imgSrc} alt={playlist.name} />
              <p>{playlist.name}</p>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default RightContent;
