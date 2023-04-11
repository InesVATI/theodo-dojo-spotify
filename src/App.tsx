import logo from './assets/logo.svg';
import './App.css';
import { fetchTracks } from './lib/fetchTracks';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
// const apiToken = '';

// export const fetchTracks = async () => {
//   const response = await fetch('https://api.spotify.com/v1/me/tracks', {
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + apiToken,
//     },
//   });
//   if (!response.ok) {
//     throw new Error(`Fetching tracks failed with status ${response.status}`);
//   }
//   const data = (await response.json()) as { items: unknown[] };

//   return data.items;
// };

const trackUrls = [
  'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
  'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
  'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
  'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
  'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
];

const App = () => {
  // let trackIndex = 0;
  const [trackIndex, setTrackIndex] = useState(0);
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };
  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });
  if (tracks === undefined) {
    return <p> Warning, tracks is undefined </p>;
  }

  console.log(tracks);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le nouveau Spotify</h1>
      </header>
      <div className="App-images">
        <p>C'est parti !</p>
        {/* <audio src={trackUrls[1]} autoPlay controls /> */}
      </div>
      <div className="App-buttons">
        <audio src={trackUrls[trackIndex]} autoPlay controls />
        <button onClick={goToNextTrack}>Next track</button>
      </div>
      <p> La longueur des tracks est {tracks.length}</p>
    </div>
  );
};

export default App;
