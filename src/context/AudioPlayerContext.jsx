import React, { createContext, useState } from "react";

//! create context for audio player

export let globalAudioPlayer = createContext();

const AudioPlayerContext = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  return (
    <>
      <globalAudioPlayer.Provider
        value={{
          songs,
          setSongs,
          isPlaying,
          setIsPlaying,
          currentSongIndex,
          setCurrentSongIndex,
        }}
      >
        {children}
      </globalAudioPlayer.Provider>
    </>
  );
};

export default AudioPlayerContext;
