import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
}

interface MessageListProps {
  messages: Message[];
}

function MessageList({ messages }: MessageListProps) {
  const [showSummary, setShowSummary] = useState(true);
  const [showComplete, setShowComplete] = useState(false);

  const toggleSummary = () => {
    setShowSummary(true);
    setShowComplete(false);
  };

  const toggleComplete = () => {
    setShowSummary(false);
    setShowComplete(true);
  };

  return (
    <div>
      <h3>Message List</h3>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            {showSummary ? (
              <button onClick={toggleComplete}>Show Complete Message</button>
            ) : (
              <button onClick={toggleSummary}>Show Summary</button>
            )}
            {showSummary ? message.text.substring(0, 50) + '...' : message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;

