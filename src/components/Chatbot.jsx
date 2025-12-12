import React, { useState, useRef, useEffect } from 'react'
import Avatar from './Avatar'
import Loader from './Loader'
import './Chatbot.css'

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! I'm Aurora, your AI companion. How can I help you today? ✨",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const responses = [
    "That's fascinating! Tell me more about that. 🌟",
    "I see what you mean! Here's my perspective on that... 💭",
    "Interesting point! Let me think about that for a moment. 🤔",
    "Wow, that's really cool! I'd love to explore that further. 🚀",
    "You've got me intrigued! Can you elaborate on that? ✨",
    "That's a great question! Let me help you with that. 💡",
    "I'm here to help! What else would you like to know? 🌈",
    "Absolutely! That makes perfect sense to me. 🎯",
    "I love where this conversation is going! Keep it coming. 💫",
    "You're on fire with these questions! Let's dive deeper. 🔥"
  ]

  const getRandomResponse = () => {
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = {
      id: messages.length + 1,
      text: input.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)
    setIsLoading(true)

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: getRandomResponse(),
        sender: 'bot',
        timestamp: new Date()
      }
      setIsTyping(false)
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 1500 + Math.random() * 1000)
  }

  const messageCount = messages.length
  const userMessageCount = messages.filter(m => m.sender === 'user').length

  return (
    <div className="chatbot-container">
      <div className="chatbot-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-title">Aurora AI</div>
          <p className="sidebar-description">
            Your intelligent AI companion powered by advanced neural networks. 
            Ready to assist you with anything you need.
          </p>
        </div>
        
        <div className="sidebar-stats">
          <div className="stat-item">
            <span className="stat-label">Messages</span>
            <span className="stat-value">{messageCount}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Your Messages</span>
            <span className="stat-value">{userMessageCount}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Status</span>
            <span className="stat-value">{isTyping ? 'Typing...' : 'Online'}</span>
          </div>
        </div>
      </div>

      <div className="chatbot-main">
        <div className="chatbot-header">
          <div className="header-content">
            <Avatar isTyping={isTyping} />
            <div className="header-info">
              <h1 className="chatbot-name">Aurora</h1>
              <p className="chatbot-status">
                {isTyping ? 'typing...' : 'online'}
              </p>
            </div>
          </div>
          <div className="header-decoration">
            <div className="decoration-dot"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-dot"></div>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              {message.sender === 'bot' && (
                <div className="message-avatar">
                  <Avatar />
                </div>
              )}
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot-message typing-indicator">
              <div className="message-avatar">
                <Avatar isTyping={true} />
              </div>
              <div className="message-content">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-form" onSubmit={handleSend}>
          <div className="input-wrapper">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="chatbot-input"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="send-button"
              disabled={!input.trim() || isLoading}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Chatbot

