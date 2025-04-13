import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { globalAudioPlayer } from "../context/AudioPlayerContext";

const AlbumDetails = () => {
  let {
    songs,
    setSongs,
    isPlaying,
    setIsPlaying,
    currentSongIndex,
    setCurrentSongIndex,
  } = useContext(globalAudioPlayer);

  let location = useLocation();
  //! extract Album Data
  let albumData = location?.state;
  console.log(albumData);

  // ! extract songs data
  let songsData = albumData?.songs;
  console.log(songsData);

  //! create one function which will handle the songs
  let handleSongChange = (index) => {
    setSongs(songsData);
    setCurrentSongIndex(index);
    if (currentSongIndex === index) {
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <>
      <section className="w-[calc(100vw-16vw)] h-100vh p-5 flex items-center justify-center flex-col gap-8 rounded-lg shadow-lg pb-[120px]">
        <article className="w-full h-[350px] flex justify-between items-center mb-8 bg-white shadow-lg rounded-lg p-6">
          <aside className="flex-shrink-0 m-2">
            <img
              src={albumData?.albumThumbnail}
              alt={albumData?.albumTitle}
              className="w-[350px] h-[350px] rounded-lg shadow-md"
            />
          </aside>
          <aside className="w-[65%] h-full flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-black">{albumData?.albumTitle}</h1>
            <div className="flex gap-2" >
              <span className="font-semibold text-black">Description:</span>
              <p className="text-black">{albumData?.albumDesc}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-black">Artist:</span>
              <p className="text-black">{albumData?.albumDirector}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-black">Release Date:</span>
              <p className="text-black">{albumData?.albumReleaseDate}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-black">Language:</span>
              <p className="text-black">{albumData?.albumLang}</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-black">Album Type:</span>
              <p className="text-black">{albumData?.albumType}</p>
            </div>
          </aside>
        </article>
        <main className="w-full  ">
          <header className="w-full p-5 rounded-2xl">
            <table className="w-full text-center border-collapse bg-white shadow-lg rounded-2xl ">
              <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                <tr>
                  <th className="font-semibold text-lg py-4">Track No</th>
                  <th className="font-semibold text-lg py-4">Poster</th>
                  <th className="font-semibold text-lg py-4">Song Name</th>
                  <th className="font-semibold text-lg py-4">Singer</th>
                  <th className="font-semibold text-lg py-4">Music Director</th>
                  <th className="font-semibold text-lg py-4">Duration</th>
                  <th className="font-semibold text-lg py-4">Size</th>
                </tr>
              </thead>
              <tbody>
                {songsData?.length > 0
                  ? songsData?.map((song, index) => {
                      return (
                        <tr
                          onClick={() => handleSongChange(index)}
                          key={index}
                          className="hover:bg-gray-200 cursor-pointer transition-colors duration-200 text-black"
                        >
                          <td className="py-4">{index + 1}</td>
                          <td className="flex items-center justify-center py-4">
                            <img
                              src={song?.songThumbnail}
                              alt={song?.songTitle}
                              className="w-[100px] h-[100px] rounded-lg shadow-md"
                            />
                          </td>
                          <td className="py-4">{song?.songTitle}</td>
                          <td className="py-4">{song?.songSingers}</td>
                          <td className="py-4">{song?.songMusicDirector}</td>
                          <td className="py-4">{song?.duration}</td>
                          <td className="py-4">{song?.size}</td>
                        </tr>
                      );
                    })
                  : (
                    <tr>
                      <td colSpan="7" className="py-4 text-gray-500">
                        No Songs Found
                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
          </header>
        </main>
      </section>
    </>
  );
};

export default AlbumDetails;
