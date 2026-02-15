import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { __DB } from "../backend/firebaseconfig";
import { TbMusic } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Spinner from "../Helper/spinner";

const PopularAlbum = () => {
  let [albums, setAlbums] = useState(null);
  useEffect(() => {
    let fetchAlbums = async () => {
      //Now we will fetch the album from the database
      let albumCollectionRef = collection(__DB, "music_albums");
      let getAlbums = await getDocs(albumCollectionRef);
      console.log(getAlbums);
      let albumData = getAlbums.docs.map((album) => ({
        ...album?.data(),
        songs: album?.data()?.songs || [],
      }));
      console.log("AlbumData", albumData);
      setAlbums(albumData);
    };
    //call the function
    fetchAlbums();
  }, []);
  return (
    <section className="w-full flex justify-center md:justify-start items-start">
      <article className="w-[95%] md:w-[90%]">
        <header className="w-full px-4 md:pl-12 py-5 flex items-center gap-3 bg-gradient-to-r from-purple-500 to-white rounded-lg shadow-lg">
          <span className="text-3xl md:text-4xl text-white">
            <TbMusic />
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white">Popular Albums</h1>
        </header>
        <main className="w-full flex flex-wrap justify-center md:justify-start items-start gap-8 p-4 md:p-6 bg-gray-100 rounded-lg shadow-inner mt-5">
          {albums ? (
            <div className="w-full p-2 md:p-6 flex flex-wrap justify-center md:justify-start items-start gap-4 md:gap-8">
              {albums.map((album, index) => {
                return (
                  <NavLink
                    to={`album-details/${album?.albumTitle}`}
                    key={index}
                    state={album}
                  >
                    <div className="w-[160px] md:w-[260px] h-auto min-h-[220px] md:h-[330px] bg-gradient-to-b from-gray-800 to-black p-2 md:p-4 rounded-lg text-white hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out">
                      <img
                        src={album?.albumThumbnail}
                        alt={album?.albumTitle}
                        className="w-full h-[140px] md:h-[250px] rounded-lg hover:opacity-90 transition-opacity duration-200 object-cover"
                      />
                      <h1 className="py-1 md:py-2 text-center mt-2 rounded text-sm md:text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white truncate px-1">
                        {album?.albumTitle}
                      </h1>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          ) : (
            <section className="w-full h-[50vh] flex items-center justify-center bg-gray-200 rounded-lg">
              <Spinner />
            </section>
          )}
        </main>
      </article>
    </section>
  );
};

export default PopularAlbum;
