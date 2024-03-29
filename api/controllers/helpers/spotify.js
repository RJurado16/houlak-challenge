
const axios = require('axios');
const qs = require('qs');
const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
const { SPOTIFY_API } = require('../../utils/config');

/**
 * Get Spotify API Access Token via Client Credentials Authorization
 */
const getToken = async () => {  
  const headers = {
    headers: {
       Accept: 'application/json',
       'Content-Type': 'application/x-www-form-urlencoded',
     },
     auth: {
       username: SPOTIFY_CLIENT_ID,
       password: SPOTIFY_CLIENT_SECRET,
     },
   };

  const data = {
    grant_type: 'client_credentials'
  }

  try {
    const result = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(data), headers);
    
    return result.data.access_token;
  } catch (err) {
    console.log(err);
  }
}

/**
 * Search artist by name in Spotify API
 */
const getArtist = async (headers, artist) => {
  const artistNormalized = artist.trim().toLowerCase();
  const artistQuery = artistNormalized.split(' ').join('%20');    
  
  try {
    const result = await axios.get(`${SPOTIFY_API}/search?q=${artistQuery}&type=artist`, { headers });
    const artistId = result.data.artists.items.find(el => el.name.toLowerCase() === artistNormalized)?.id || null

    if (artistId) {
      return artistId;
    }
  } catch (err) {
    console.log(err);
  }
}

/**
 * Get Several Albums data by IDs and with DESC order by popularity
 */
const getAlbumsPopularity = async (headers, albumsIds) => {
  let i = 0;
  let j = 0;
  let albums = [];
  let resultsFound = [];
  
  while (i < albumsIds.length) {
    if (!albums[j]) {
      albums.push([])
    } else if(albums[j].length === 20) {
      albums.push([])
      j++;
    }
    albums[j].push(albumsIds[i])  
    i++;
  }
  
  albums.forEach(el => el.join('%2C'))

  try {
    for (idCollection of albums) {
      const result = await axios.get(`${SPOTIFY_API}/albums?ids=${idCollection}`, { headers });
      resultsFound = [...resultsFound, ...result.data.albums]
    }
    
    resultsFound.sort((a,b) => {
      if (a.popularity < b.popularity) return 1;
      if (a.popularity > b.popularity) return -1;
      return 0;
    })

    return resultsFound;
  } catch(err) {
    console.log(err)
  }  
}

module.exports = {
  getToken,
  getArtist,
  getAlbumsPopularity,
}