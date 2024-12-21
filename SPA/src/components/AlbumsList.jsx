import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/AlbumsList.module.css";
import { fetchAllAlbums } from "../api";

function AlbumsList() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllAlbums()
      .then((data) => setAlbums(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.albumsList}>
      <h1>All the albums:</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/users/${album.userId}/albums/${album.id}`}>
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumsList;
