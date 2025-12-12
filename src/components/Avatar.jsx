import React from 'react'
import './Avatar.css'

const Avatar = ({ isTyping = false }) => {
  return (
    <div className={`avatar-container ${isTyping ? 'pulsing' : ''}`}>
      <div className="avatar-glow"></div>
      <div className="avatar-face">
        <div className="avatar-eyes">
          <div className="eye left-eye">
            <div className="pupil"></div>
          </div>
          <div className="eye right-eye">
            <div className="pupil"></div>
          </div>
        </div>
        <div className="avatar-mouth"></div>
      </div>
      <div className="avatar-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  )
}

export default Avatar


