import React, { useState } from 'react';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      // call API to get response from chatbot and append to messages array
    }
  }

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((message, index) => (
          <div className={`message ${message.sender}`} key={index}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;