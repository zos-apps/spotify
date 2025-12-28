import React from 'react';

interface SpotifyProps { onClose: () => void; }

const Spotify: React.FC<SpotifyProps> = ({ onClose }) => (
  <div className="h-full w-full bg-black">
    <iframe src="https://open.spotify.com/" className="w-full h-full border-0" allow="encrypted-media; autoplay; clipboard-write" title="Spotify" />
  </div>
);

export default Spotify;
