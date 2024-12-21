import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "../styles/UserDetail.module.css";
import { fetchUserAlbums, fetchUser } from "../api";

function UserDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchUser(userId)
      .then((userData) => setUser(userData))
      .catch(() => navigate("/404", { replace: true }));

    fetchUserAlbums(userId)
      .then((data) => {
        if (data.length === 0) {
          navigate("/404", { replace: true });
        } else {
          setAlbums(data);
        }
      })
      .catch(() => navigate("/404", { replace: true }))
      .finally(() => setLoading(false));
  }, [userId, navigate]);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className={styles.userDetail}>
      {user && (
        <div className={styles.userInfo}>
          <h2>Info:</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Mail:</strong> {user.email}
          </p>
          <p>
            <strong>Tel:</strong> {user.phone}
          </p>
          <p>
            <strong>Web:</strong>{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </p>
        </div>
      )}

      <h1>User Albums:</h1>
      <ul className={styles.albumsList}>
        {albums.map((album) => (
          <p key={album.id}>
            <Link to={`/users/${userId}/albums/${album.id}`}>
              {album.title}
            </Link>
          </p>
        ))}
      </ul>
    </div>
  );
}

export default UserDetail;
