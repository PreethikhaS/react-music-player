import React from 'react';
import "./Albumscontainer.css"

const AlbumsContainer = () => {
  const albums = [
    { id: 1, title: 'Album 1', imgSrc: 'album1.jpg' },
    { id: 2, title: 'Album 2', imgSrc: 'album2.jpg' },
    { id: 3, title: 'Album 3', imgSrc: 'album3.jpg' },
  ];

  return (
    <section className="albums">
      <h1>Popular Albums</h1>
      <div className="album-container">
        {albums.map((album) => (
          <div key={album.id} className="album">
            <div className="album-frame">
              <img src={album.imgSrc} alt={album.title} />
            </div>
            <h2>{album.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlbumsContainer;
