# Aurora - AI Chatbot

A beautiful, modern React chatbot application with a dark-themed UI and smooth animations. Aurora is an AI companion interface built with React and Vite.

## Features

- 🎨 **Modern Dark Theme**: Beautiful gradient backgrounds with animated grid patterns
- 💬 **Real-time Chat Interface**: Interactive chat with typing indicators
- 🤖 **AI Companion**: Aurora, your intelligent AI assistant
- 📊 **Statistics Dashboard**: Track messages and conversation stats
- ✨ **Smooth Animations**: Polished UI with CSS animations and transitions
- 📱 **Responsive Design**: Works seamlessly across different screen sizes

## Tech Stack

- **React 18.2.0**: Modern React with hooks
- **Vite 5.0.8**: Fast build tool and dev server
- **CSS3**: Custom styling with animations and gradients
- **JavaScript (ES6+)**: Modern JavaScript features

## Project Structure

```
Chatbot/
├── src/
│   ├── components/
│   │   ├── Avatar.jsx       # Avatar component with typing animation
│   │   ├── Avatar.css
│   │   ├── Chatbot.jsx      # Main chatbot component
│   │   ├── Chatbot.css
│   │   ├── Loader.jsx       # Loading indicator component
│   │   └── Loader.css
│   ├── App.jsx              # Root application component
│   ├── App.css              # Global app styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Base styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
└── package.json             # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Chatbot
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

### Build for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Components

### Chatbot
The main chatbot component that handles:
- Message state management
- User input handling
- Bot response generation
- Typing indicators
- Message statistics

### Avatar
Animated avatar component that displays:
- Static avatar state
- Typing animation when the bot is responding

### Loader
Loading indicator component for async operations.

## Usage

1. Start a conversation by typing a message in the input field
2. Press Enter or click the send button to send your message
3. Aurora will respond with contextual messages
4. View conversation statistics in the sidebar

## Customization

### Styling
Modify the CSS files in the `src/components/` directory to customize:
- Color schemes
- Animations
- Layout and spacing
- Typography

### Bot Responses
Edit the `responses` array in `src/components/Chatbot.jsx` to customize bot responses.

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

