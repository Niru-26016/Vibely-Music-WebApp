# 🎵 Vibely - Music Web App

Vibely is a modern, full-stack music streaming web application built with React and Firebase. It features a seamless music player experience, album management for administrators, and a fully responsive design for mobile and desktop devices.

## 🚀 Features

- **User Authentication**: Secure Login and Registration using Firebase Auth.
- **Interactive Music Player**: Play, pause, and skip tracks with a global audio player state.
- **Album Management**: Admins can create and manage music albums, including track uploads.
- **Mobile Responsive**: Fully optimized for all screen sizes, featuring a mobile-friendly hamburger menu and stacked layouts.
- **Cloud Storage**: Efficient image and audio storage using Cloudinary.
- **Cloud Firestore**: Real-time database for managing user profiles and music metadata.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4
- **Backend/Database**: Firebase (Auth, Firestore)
- **Media Storage**: Cloudinary (API integration)
- **Icons**: React Icons (Hi, Tb, Io, Lia)
- **Notifications**: React Hot Toast

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Niru-26016/Vibely-Music-WebApp.git
   cd Vibely-Music-WebApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the root directory and add your credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id

   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
   VITE_CLOUDINARY_UPLOAD_PRESET_ALBUMS=your_album_preset
   VITE_CLOUDINARY_UPLOAD_PRESET_PROFILE=your_profile_preset
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 📱 Mobile Responsiveness

The application has been recently updated to ensure a premium experience on mobile devices. Key updates include:
- **Responsive NavBar**: A clean hamburger menu for navigation on small screens.
- **Flexible Grid**: Album listings adjust dynamically to fit mobile displays.
- **Optimized Tracklists**: Large tables are transformed into readable list views on mobile.

## 🔒 Security

All sensitive API keys and configuration secrets are managed through environment variables to ensure they are never exposed in the public repository.

## 🎓 College Project

This project was originally developed as a college project and has been enhanced with professional-grade responsiveness and security practices.
