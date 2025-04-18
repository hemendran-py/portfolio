import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

// Function to refresh Spotify access token
async function refreshAccessToken() {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const refreshToken = process.env.REFRESH_TOKEN;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  const formData = new URLSearchParams();
  formData.append('grant_type', 'refresh_token');
  formData.append('refresh_token', refreshToken);

  const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${authHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  });

  const data = await response.json();
  return data.access_token;
}

// Fetch recently played track
async function getRecentlyPlayedTrack(accessToken) {
  const apiUrl = 'https://api.spotify.com/v1/me/player/recently-played';

  const response = await fetch(apiUrl, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
    cache: 'no-store' // Prevents caching
  });

  const data = await response.json();
  return data.items.length ? data.items[0].track : null;
}

// Fetch user profile
async function getUserProfile(accessToken) {
  const apiUrl = 'https://api.spotify.com/v1/me';

  const response = await fetch(apiUrl, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
    cache: 'no-store' // Prevents caching
  });

  const data = await response.json();
  return data;
}

// Main GET function to return fresh data
export async function GET() {
  try {
    const accessToken = await refreshAccessToken();
    const track = await getRecentlyPlayedTrack(accessToken);
    const userProfile = await getUserProfile(accessToken);

    if (track) {
      return NextResponse.json(
        {
          name: track.name,
          artist: track.artists.map(artist => artist.name).join(', '),
          image: track.album.images[0]?.url || '',
          url: track.external_urls.spotify,
          profileUrl: userProfile.external_urls.spotify,
        },
        {
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', // Prevents caching
            Pragma: 'no-cache',
            Expires: '0',
          },
        }
      );
    } else {
      return NextResponse.json({ message: 'No recently played track found.' });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data.' }, { status: 500 });
  }
}
