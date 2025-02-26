import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');
    
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    
    const data = await response.json();
    setMessages([...newMessages, { text: data.reply, sender: 'bot' }]);
  };
  
  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="border p-3 h-80 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 p-2 rounded ${msg.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <input
          className="border p-2 flex-grow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button className="ml-2 p-2 bg-blue-500 text-white" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}