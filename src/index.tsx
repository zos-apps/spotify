import React, { useState } from 'react';

interface SpotifyProps { onClose: () => void; }

const playlists = [
  { name: 'Liked Songs', count: 847, color: 'from-indigo-600 to-blue-400' },
  { name: 'Discover Weekly', count: 30, color: 'from-purple-600 to-pink-400' },
  { name: 'Release Radar', count: 50, color: 'from-green-600 to-teal-400' },
  { name: 'Daily Mix 1', count: 50, color: 'from-orange-600 to-yellow-400' },
];

const songs = [
  { title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', plays: '3.5B' },
  { title: 'Shape of You', artist: 'Ed Sheeran', album: '÷', duration: '3:53', plays: '3.4B' },
  { title: 'Someone You Loved', artist: 'Lewis Capaldi', album: 'Divinely Uninspired...', duration: '3:02', plays: '2.9B' },
  { title: 'Dance Monkey', artist: 'Tones and I', album: 'The Kids Are Coming', duration: '3:29', plays: '2.7B' },
  { title: 'Sunflower', artist: 'Post Malone', album: 'Spider-Man Soundtrack', duration: '2:38', plays: '2.6B' },
  { title: 'One Dance', artist: 'Drake', album: 'Views', duration: '2:54', plays: '2.5B' },
  { title: 'Rockstar', artist: 'Post Malone', album: 'Beerbongs & Bentleys', duration: '3:38', plays: '2.4B' },
  { title: 'Believer', artist: 'Imagine Dragons', album: 'Evolve', duration: '3:24', plays: '2.3B' },
];

const Spotify: React.FC<SpotifyProps> = ({ onClose }) => {
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [progress, setProgress] = useState(45);

  return (
    <div className="h-full flex flex-col bg-black text-white">
      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-56 bg-black p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xl font-bold text-green-500">
            <span className="text-2xl">🎵</span> Spotify
          </div>
          <nav className="space-y-2">
            <button className="flex items-center gap-3 w-full text-left hover:text-white text-white/70 py-2">🏠 Home</button>
            <button className="flex items-center gap-3 w-full text-left hover:text-white text-white/70 py-2">🔍 Search</button>
            <button className="flex items-center gap-3 w-full text-left hover:text-white text-white/70 py-2">📚 Your Library</button>
          </nav>
          <div className="mt-4">
            <p className="text-xs uppercase text-white/40 font-bold mb-2">Playlists</p>
            <div className="space-y-1">
              {playlists.map(p => (
                <button key={p.name} className="block w-full text-left text-sm text-white/60 hover:text-white py-1 truncate">
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main area */}
        <div className="flex-1 bg-gradient-to-b from-green-900/50 to-black overflow-auto">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Good evening</h1>
            
            {/* Quick picks */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {playlists.map(p => (
                <button key={p.name} className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded overflow-hidden transition-colors">
                  <div className={`w-12 h-12 bg-gradient-to-br ${p.color}`}></div>
                  <span className="font-medium text-sm">{p.name}</span>
                </button>
              ))}
            </div>

            {/* Popular songs */}
            <h2 className="text-2xl font-bold mb-4">Popular</h2>
            <div className="bg-black/20 rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-white/40 border-b border-white/10">
                    <th className="text-left py-2 px-4 w-8">#</th>
                    <th className="text-left py-2">Title</th>
                    <th className="text-left py-2">Album</th>
                    <th className="text-right py-2 px-4">🕒</th>
                  </tr>
                </thead>
                <tbody>
                  {songs.map((song, i) => (
                    <tr 
                      key={i} 
                      className={`hover:bg-white/10 cursor-pointer ${currentSong.title === song.title ? 'text-green-500' : ''}`}
                      onClick={() => { setCurrentSong(song); setPlaying(true); }}
                    >
                      <td className="py-2 px-4 text-white/40">{i + 1}</td>
                      <td className="py-2">
                        <div className="font-medium">{song.title}</div>
                        <div className="text-white/60 text-xs">{song.artist}</div>
                      </td>
                      <td className="py-2 text-white/60">{song.album}</td>
                      <td className="py-2 px-4 text-right text-white/60">{song.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Player bar */}
      <div className="h-20 bg-zinc-900 border-t border-white/10 flex items-center px-4 gap-4">
        {/* Current song info */}
        <div className="flex items-center gap-3 w-56">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-400 rounded"></div>
          <div>
            <div className="font-medium text-sm">{currentSong.title}</div>
            <div className="text-xs text-white/60">{currentSong.artist}</div>
          </div>
          <button className="text-green-500 ml-2">♥</button>
        </div>

        {/* Controls */}
        <div className="flex-1 flex flex-col items-center gap-1">
          <div className="flex items-center gap-4">
            <button className="text-white/60 hover:text-white">🔀</button>
            <button className="text-white/60 hover:text-white text-lg">⏮</button>
            <button 
              onClick={() => setPlaying(!playing)}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black"
            >
              {playing ? '⏸' : '▶'}
            </button>
            <button className="text-white/60 hover:text-white text-lg">⏭</button>
            <button className="text-white/60 hover:text-white">🔁</button>
          </div>
          <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-xs text-white/60">1:28</span>
            <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs text-white/60">{currentSong.duration}</span>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2 w-32">
          <button className="text-white/60">🔊</button>
          <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
