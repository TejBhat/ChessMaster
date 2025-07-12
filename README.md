# Chess Master - Real-time Multiplayer Chess Game

A fully functional real-time multiplayer chess game built with Node.js, Express, Socket.IO, and Chess.js.

## Features

### ✨ Core Features
- **Real-time Multiplayer**: Play chess with other players in real-time
- **Drag & Drop Interface**: Intuitive piece movement with visual feedback
- **Move Validation**: Automatic chess rule enforcement using Chess.js
- **Game State Management**: Proper turn management and game state tracking

### 🎮 Gameplay Features
- **Player Roles**: First two players get White/Black, others become spectators
- **Visual Indicators**: Hover effects, selected pieces, and valid move hints
- **Game Status**: Real-time updates on check, checkmate, stalemate, and draws
- **Turn Management**: Enforced alternating turns between players

### 💬 Social Features
- **Live Chat**: Real-time chat system for players and spectators
- **Player Status**: Display current player roles and connection status
- **Game Reset**: Players can reset the game at any time

### 🎨 UI/UX Features
- **Modern Design**: Beautiful, responsive interface with Tailwind CSS
- **Chess Piece Symbols**: Unicode chess pieces for clear visualization
- **Responsive Layout**: Works on desktop and mobile devices
- **Game Information Panel**: Shows current turn, game mode, and instructions

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Quick Start
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ChessClone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Production Setup
For production deployment:
```bash
npm start
```

## How to Play

1. **Join a Game**: Open the application in your browser
2. **Player Assignment**: 
   - First player becomes White
   - Second player becomes Black
   - Additional players become spectators
3. **Make Moves**: Drag and drop pieces to make moves
4. **Chat**: Use the chat feature to communicate with other players
5. **Reset**: Use the reset button to start a new game

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

## API Events

### Client to Server
- `move`: Send a chess move
- `resetGame`: Request game reset
- `chatMessage`: Send chat message

### Server to Client
- `playerRole`: Assign player role (white/black)
- `spectatorRole`: Assign spectator role
- `move`: Broadcast move to all clients
- `boardState`: Sync board state
- `gameOver`: Game end notification
- `message`: Game status messages
- `invalidMove`: Invalid move notification
- `chatMessage`: Broadcast chat message
- `gameState`: Game state updates

## Development

### Available Scripts
- `npm start`: Start the production server
- `npm run dev`: Start development server with auto-reload
- `npm test`: Run tests (not implemented yet)

### Development Features
- **Nodemon**: Automatic server restart on file changes
- **Detailed Logging**: Server-side logging for debugging
- **Error Handling**: Comprehensive error handling for invalid moves
- **Connection Management**: Proper handling of player connections/disconnections

## Future Enhancements

- [ ] Player authentication and user accounts
- [ ] Game history and move notation
- [ ] Spectator mode improvements
- [ ] Tournament system
- [ ] AI opponent option
- [ ] Time controls and chess clocks
- [ ] Sound effects and animations
- [ ] Mobile app version
- [ ] Database integration for persistent games
- [ ] Rating system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

---

**Enjoy playing Chess Master! ♟️**