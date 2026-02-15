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
      <section className="w-full min-h-screen p-2 md:p-5 flex items-center justify-center flex-col gap-4 md:gap-8 rounded-lg shadow-lg pb-[120px] mt-[70px]">
        <article className="w-full h-auto md:h-[350px] flex flex-col md:flex-row justify-between items-center mb-8 bg-white shadow-lg rounded-lg p-4 md:p-6 gap-6">
          <aside className="w-full md:w-auto flex-shrink-0 flex justify-center">
            <img
              src={albumData?.albumThumbnail}
              alt={albumData?.albumTitle}
              className="w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-lg shadow-md object-cover"
            />
          </aside>
          <aside className="w-full md:w-[65%] h-full flex flex-col gap-2 md:gap-4 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-black">{albumData?.albumTitle}</h1>
            <div className="flex flex-col md:flex-row gap-1 md:gap-2" >
              <span className="font-semibold text-black">Description:</span>
              <p className="text-black text-sm md:text-base">{albumData?.albumDesc}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              <div className="flex gap-2">
                <span className="font-semibold text-black text-sm md:text-base">Artist:</span>
                <p className="text-black text-sm md:text-base">{albumData?.albumDirector}</p>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-black text-sm md:text-base">Release:</span>
                <p className="text-black text-sm md:text-base">{albumData?.albumReleaseDate}</p>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-black text-sm md:text-base">Language:</span>
                <p className="text-black text-sm md:text-base">{albumData?.albumLang}</p>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-black text-sm md:text-base">Type:</span>
                <p className="text-black text-sm md:text-base">{albumData?.albumType}</p>
              </div>
            </div>
          </aside>
        </article>

        <main className="w-full px-2 md:px-0">
          <header className="w-full rounded-2xl overflow-hidden">
            {/* Desktop Table View */}
            <div className="hidden md:block">
              <table className="w-full text-center border-collapse bg-white shadow-lg rounded-2xl overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
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
                    ? songsData?.map((song, index) => (
                      <tr
                        onClick={() => handleSongChange(index)}
                        key={index}
                        className="hover:bg-gray-200 cursor-pointer transition-colors duration-200 text-black border-b border-gray-100"
                      >
                        <td className="py-4">{index + 1}</td>
                        <td className="flex items-center justify-center py-4">
                          <img
                            src={song?.songThumbnail}
                            alt={song?.songTitle}
                            className="w-[80px] h-[80px] rounded-lg shadow-md"
                          />
                        </td>
                        <td className="py-4 font-medium">{song?.songTitle}</td>
                        <td className="py-4">{song?.songSingers}</td>
                        <td className="py-4">{song?.songMusicDirector}</td>
                        <td className="py-4">{song?.duration}</td>
                        <td className="py-4">{song?.size}</td>
                      </tr>
                    ))
                    : <tr><td colSpan="7" className="py-8 text-gray-500">No Songs Found</td></tr>}
                </tbody>
              </table>
            </div>

            {/* Mobile List View */}
            <div className="md:hidden flex flex-col gap-4">
              {songsData?.length > 0 ? (
                songsData.map((song, index) => (
                  <div
                    key={index}
                    onClick={() => handleSongChange(index)}
                    className="bg-white p-3 rounded-xl shadow-md flex items-center gap-4 active:scale-95 transition-transform"
                  >
                    <div className="text-gray-400 font-bold w-6">{index + 1}</div>
                    <img
                      src={song?.songThumbnail}
                      alt={song?.songTitle}
                      className="w-16 h-16 rounded-lg shadow-sm flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h2 className="text-black font-bold truncate">{song?.songTitle}</h2>
                      <p className="text-gray-500 text-xs truncate">{song?.songSingers}</p>
                    </div>
                    <div className="text-gray-400 text-xs">{song?.duration}</div>
                  </div>
                ))
              ) : (
                <div className="bg-white p-8 rounded-xl shadow-md text-center text-gray-500">No Songs Found</div>
              )}
            </div>
          </header>
        </main>
      </section>
    </>
  );
};

export default AlbumDetails;
