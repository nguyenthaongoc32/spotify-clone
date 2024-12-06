
import React, { useState } from "react";
import SongList from "./components/SongList";
import Player from "./components/Player";
import NowPlaying from "./components/NowPlaying";

function App() {
  const [songs] = useState([
    { id: 1, title: "Song 1", artist: "Artist 1" },
    { id: 2, title: "Song 2", artist: "Artist 2" },
    { id: 3, title: "Song 3", artist: "Artist 3" },
  ]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col">
      <header className="p-4 bg-gray-800 text-center">
        <h1 className="text-2xl font-bold">🎵 Spotify Clone</h1>
      </header>
      <main className="flex-grow overflow-auto">
        <SongList songs={songs} onPlay={playSong} currentSong={currentSong} />
        <NowPlaying currentSong={currentSong} />
      </main>
      <Player currentSong={currentSong} onPlayPause={togglePlayPause} isPlaying={isPlaying} />
    </div>
  );
}

export default App;