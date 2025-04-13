import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./global.css";
import App from "./App";
import Path from "./Routes/routes";
import AuthContextApi from "./context/AuthContextApi";
import FetchUserContext from "./context/FetchUserContext";
import AudioPlayerContext from "./context/AudioPlayerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthContextApi>
      <FetchUserContext>
        <AudioPlayerContext>
          <RouterProvider router={Path} />
        </AudioPlayerContext>
      </FetchUserContext>
    </AuthContextApi>
  </>
);
