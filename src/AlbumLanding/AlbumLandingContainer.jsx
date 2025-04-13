import React, { useContext } from "react";
import AlbumlandingSidebar from "./AlbumlandingSidebar";
import AlbumLandingContent from "./AlbumLandingContent";
import CustomAudioPlayer from "react-pro-audio-player";
import { globalAudioPlayer } from "../context/AudioPlayerContext";

const AlbumLandingContainer = () => {
  let {
    songs,
    setSongs,
    isPlaying,
    setIsPlaying,
    currentSongIndex,
    setCurrentSongIndex,
  } = useContext(globalAudioPlayer);
  return (
    <section className="w-[100vw] h-min-[(calc(100vh-70px)] flex">
      <AlbumlandingSidebar />
      <AlbumLandingContent />
      {currentSongIndex !== null && (
        <div className="w-full fixed bottom-0 ">
          <CustomAudioPlayer
            songs={songs}
            isPlaying={isPlaying}
            currentSongIndex={currentSongIndex}
            onPlayPauseChange={setIsPlaying}
            onSongChange={setCurrentSongIndex}
            songUrlKey="songFile"
            songNameKey="songTitle"
            songThumbnailKey="songThumbnail"
            songSingerKey="songSingers"
          />
        </div>
      )}
    </section>
  );
};

export default AlbumLandingContainer;
