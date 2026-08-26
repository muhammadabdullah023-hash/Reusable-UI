import { useState, useEffect } from "react";
import Buttons from "./Buttons";

// Fetches random user data from the RandomUser public API
// (https://randomuser.me) — no API key required.

function DataGrid({ theme = "blue" }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchUsers() {
    setLoading(true);
    setError(null);

    fetch("https://randomuser.me/api/?results=6")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  // Fetch data once when the component first mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="data-grid-wrapper">

      {/* LOADING STATE */}
      {loading && (
        <div className="loading-spinner-wrapper">
          <div className="loading-spinner"></div>
          <p>Loading data...</p>
        </div>
      )}

      {/* ERROR STATE */}
      {error && !loading && (
        <p className="data-error">Something went wrong: {error}</p>
      )}

      {/* SUCCESS STATE */}
      {!loading && !error && (
        <div className="data-grid">
          {users.map((user) => (
            <div className="data-card" key={user.login.uuid}>
              <img
                src={user.picture.medium}
                alt={user.name.first}
                className="data-card-img"
              />
              <h4>
                {user.name.first} {user.name.last}
              </h4>
              <p className="data-card-email">{user.email}</p>
              <p className="data-card-location">
                {user.location.city}, {user.location.country}
              </p>
            </div>
          ))}
        </div>
      )}

      {!loading && (
        <div className="data-grid-refresh">
          <Buttons
            text="🔄 FETCH NEW DATA"
            color={theme}
            size="medium"
            onClick={fetchUsers}
          />
        </div>
      )}
    </div>
  );
}

export default DataGrid;
