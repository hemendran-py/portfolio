'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);

  async function fetchTrack() {
    try {
      // Append timestamp to prevent caching
      const response = await fetch(`/api/recently-played?t=${Date.now()}`, {
        cache: 'no-store', // Ensures fresh data from server
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch track.');
      }

      const data = await response.json();

      if (data.name) {
        setTrack(data);
      } else {
        setError('No recently played track found.');
      }
    } catch (err) {
      setError('Failed to load track.');
    }
  }

  useEffect(() => {
    fetchTrack(); // Fetch on first load

    const interval = setInterval(() => {
      fetchTrack();
    }, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="homepage-container">
      <div className="spotify-header">
        <img className="spotify-logo" src="/spotify_logo.png" alt="Spotify Logo" />
        <h1 className="title font-semibold">Recently Played</h1>
        {track && (
          <button
            className="view-profile"
            onClick={() => window.open(track.profileUrl, '_blank')}
          >
            View Profile
          </button>
        )}
      </div>

      {track ? (
        <div className="track-info">
          <img className="track-image" src={track.image} alt={track.name} />
          <div className="track-details">
            <div className="track-text">
              <h3 className="track-name">{track.name}</h3>
              <p className="track-artist">{track.artist}</p>
            </div>
            <button
              className="play-now-btn"
              onClick={() => window.open(track.url, '_blank')}
            >
              Play On <img className="spotify-logo2" src="/spotify_logo.png" alt="Spotify Logo" />
            </button>
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}
