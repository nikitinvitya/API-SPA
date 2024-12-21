import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "../styles/AlbumDetail.module.css";
import { fetchAlbumPhotos, fetchAlbum, fetchUser } from "../api";

function AlbumDetail() {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchAlbum(albumId)
      .then((album) => {
        setUserId(album.userId);
        return album.userId;
      })
      .then((userId) => {
        return fetchUser(userId).then((user) => setUserName(user.name));
      })
      .catch(() => navigate("/404", { replace: true }));

    fetchAlbumPhotos(albumId)
      .then((data) => {
        if (data.length === 0) {
          navigate("/404", { replace: true });
        } else {
          setPhotos(data);
        }
      })
      .catch(() => navigate("/404", { replace: true }))
      .finally(() => setLoading(false));
  }, [albumId, navigate]);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.albumDetail}>
        <h1>Photos:</h1>
        <h2>
          Users album:{" "}
          <Link to={`/users/${userId}/albums`} className={styles.userLink}>
            {userName}
          </Link>
        </h2>
        <div className={styles.photosGrid}>
          {photos.map((photo) => (
            <div key={photo.id} className={styles.photoContainer}>
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className={styles.photo}
              />
            </div>
          ))}
        </div>
        {userId && (
          <Link to={`/users/${userId}/albums`} className={styles.backLink}>
            Back to albums
          </Link>
        )}
      </div>
    </div>
  );
}

export default AlbumDetail;
