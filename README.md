# Chess Master - Real-time Multiplayer Chess Game

A fully functional real-time multiplayer chess game built with Node.js, Express, Socket.IO, and Chess.js.

## Technical Architecture

### Backend (Node.js + Express)
- **Express Server**: Serves the web application and static files
- **Socket.IO**: Handles real-time communication between players
- **Chess.js**: Provides chess game logic and move validation
- **Game State Management**: Tracks players, turns, and game status

### Frontend (Vanilla JavaScript)
- **Chess Board Rendering**: Dynamic HTML generation for the chess board
- **Drag & Drop API**: Native HTML5 drag and drop for piece movement
- **Socket.IO Client**: Real-time communication with the server
- **Responsive UI**: Modern interface using Tailwind CSS

### Key Technologies
- **Node.js**: Server-side JavaScript runtime
- **Express**: Web application framework
- **Socket.IO**: Real-time bidirectional event-based communication
- **Chess.js**: Chess game logic library
- **EJS**: Templating engine for server-side rendering
- **Tailwind CSS**: Utility-first CSS framework

## Project Structure
```
ChessClone/
├── app.js                 # Main server file
├── package.json          # Dependencies and scripts
├── README.md            # Project documentation
├── views/
│   └── index.ejs        # Main HTML template
└── public/
    └── js/
        └── chessgame.js # Client-side game logic
```

