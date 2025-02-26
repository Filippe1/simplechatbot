// pages/index.js
import Chat from '../components/ui/Chat';

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-xl font-bold">Ollama Chat</h1>
      <Chat />
    </div>
  );
}