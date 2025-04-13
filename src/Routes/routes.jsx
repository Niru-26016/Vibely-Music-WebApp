import { createBrowserRouter } from "react-router-dom";
import NavBarContainer from "../Components/NavBarBlock/NavBarContainer";
import Layout from "../Layout/Layout";
import Login from "../Auth/Login";
import ResetPassword from "../Auth/ResetPassword";
import Home from "../Components/home";
import ProfileContainer from "../Components/userProfile/ProfileContainer";
import MyAccount from "../Components/userProfile/Pages/MyAccount";
import AddProfile from "../Components/userProfile/Pages/AddProfile";
import UploadProfilePhoto from "../Components/userProfile/Pages/UploadProfilePhoto";
import DeleteAccount from "../Components/userProfile/Pages/DeleteAccount";
import ChangePassword from "../Components/userProfile/Pages/ChangePassword";
import Register from "../Auth/Register";
import AdminContainer from "../Admin/AdminContainer";
import CreateAlbum from "../Admin/Album/CreateAlbum";
import AlbumLandingContainer from "../AlbumLanding/AlbumLandingContainer";
import AlbumDetails from "../AlbumLanding/AlbumDetails";
import PopularAlbum from "../AlbumLanding/PopularAlbum";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

let Path = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AlbumLandingContainer />,
        children: [
          {
            index: true,
            element: <PopularAlbum />,
          },
          {
            path: "album-details/:albumTitle",
            element: <AlbumDetails />,
          },
        ],
      },
      {
        path: "/auth/login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: "/auth/register",
        element: (
          <PublicRoutes>
            <Register />
           </PublicRoutes>
        ),
      },
      {
        path: "/auth/reset-password",
        element: (
          <PublicRoutes>firebase login
            <ResetPassword />
         </PublicRoutes>
        ),
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/admin",

        element:(<PrivateRoutes><AdminContainer /></PrivateRoutes>),
        children: [
          {
            
            index: true,
            
            element: <CreateAlbum />,
          },
        ],
      },
      {
        path: "/user/profile",
        element: (
          <PrivateRoutes>
            <ProfileContainer />
          </PrivateRoutes>
        ),
        children: [
          {
            index: true,
            element: <MyAccount />,
          },
          {
            path: "add-profile",
            element: <AddProfile />,
          },
          {
            path: "upload-profile-photo",
            element: <UploadProfilePhoto />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          {
            path: "delete-account",
            element: <DeleteAccount />,
          },
        ],
      },
    ],
  },
]);

export default Path;
