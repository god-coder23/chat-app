# 💬 ChatMail — Real-Time Chat Application

A sleek, real-time chat application built with **React** and **Firebase**, featuring Google authentication, live messaging, online presence tracking, and a stunning glassmorphism UI.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Google Sign-In** | One-click authentication via Firebase Google Auth |
| 💬 **Real-Time Messaging** | Instant message delivery powered by Firestore `onSnapshot` listeners |
| 🟢 **Online Presence** | Live online/offline status using Firebase Realtime Database |
| 🔍 **User Search** | Search and discover other registered users by name |
| 🎨 **Glassmorphism UI** | Frosted-glass design with backdrop blur, transparency, and elegant overlays |
| 📱 **Responsive Layout** | Sidebar + chat panel layout optimized for desktop screens |

---

## 🖼️ UI Preview

The app features a full-screen blurred background image with a dark overlay, giving the entire interface a cinematic, immersive feel. The sidebar and chat panel float over this background with frosted-glass styling.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | Component-based UI framework |
| [Vite 8](https://vitejs.dev) | Lightning-fast dev server & build tool |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first CSS styling |
| [Firebase Auth](https://firebase.google.com/docs/auth) | Google sign-in authentication |
| [Cloud Firestore](https://firebase.google.com/docs/firestore) | Real-time NoSQL database for messages & users |
| [Firebase Realtime DB](https://firebase.google.com/docs/database) | Online/offline presence system |
| [Lucide React](https://lucide.dev) | Beautiful, consistent icon set |

---

## 📁 Project Structure

```
chat-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── Components/
│   │   ├── ChatBox.jsx        # Chat window with messages, input & user info
│   │   └── SideBar.jsx        # User search, welcome panel & sign-out
│   ├── App.jsx                # Root component — auth gate & layout
│   ├── App.css                # Additional styles
│   ├── Login.jsx              # Google sign-in screen
│   ├── firebase.js            # Firebase configuration & exports
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│                    App.jsx                       │
│          (Auth Gate + Layout Manager)             │
│                                                   │
│   ┌──────────────┐    ┌────────────────────────┐ │
│   │  SideBar.jsx  │    │     ChatBox.jsx        │ │
│   │               │    │                        │ │
│   │ • Welcome msg │    │ • Chat header + avatar │ │
│   │ • User search │    │ • Real-time messages   │ │
│   │ • Search list │    │ • Online status        │ │
│   │ • Sign out    │    │ • Message input & send │ │
│   └──────────────┘    └────────────────────────┘ │
└─────────────────────────────────────────────────┘
                         │
            ┌────────────┴────────────┐
            │       Firebase          │
            │                         │
            │  Auth    Firestore  RTDB│
            │  (login) (messages) (presence)
            └─────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9
- A [Firebase project](https://console.firebase.google.com/) with:
  - Google Authentication enabled
  - Cloud Firestore database created
  - Realtime Database enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/chat-app.git
   cd chat-app/chat-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**

   Open `src/firebase.js` and replace the `firebaseConfig` object with your own Firebase project credentials:
   ```js
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. Open your browser at **`http://localhost:5173`**

---

## 🔥 Firebase Setup Guide

### Firestore Collections

The app uses two Firestore collections:

| Collection | Document Structure |
|---|---|
| `users` | `{ uid, name, email, photo }` |
| `chats` | `{ participants[], lastMessage, updatedAt }` |
| `chats/{chatId}/messages` | `{ text, sendedId, Timestamp }` |

### Realtime Database Structure

```json
{
  "status": {
    "<uid>": {
      "online": true
    }
  }
}
```

### Security Rules (recommended)

Make sure to configure Firestore and RTDB security rules to restrict read/write access to authenticated users only.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 🔮 Roadmap

- [ ] Chat history & conversation list in sidebar
- [ ] Image & file sharing
- [ ] Typing indicators
- [ ] Message timestamps & read receipts
- [ ] Group chat support
- [ ] Push notifications
- [ ] Mobile-responsive layout
- [ ] Dark / light theme toggle

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using React + Firebase
</p>
