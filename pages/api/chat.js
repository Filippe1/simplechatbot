export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'qwen2.5:0.5b', prompt: message, stream: false})
    });
    if (!response.ok) {
      throw new Error(`Ollama error: ${response.statusText}`);
    }
    const text = await response.text(); // Read raw response as text
    console.log("Raw Ollama response:", text);

    const data = JSON.parse(text); // Now try parsing
    res.status(200).json({ reply: data.response });
    // const data = await response.json();

    res.status(200).json({ reply: data.response });
  } catch (error) {
    console.error("Ollama API error:", error);
    res.status(500).json({ error: 'Failed to connect to Ollama' });
  }
}