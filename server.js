require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const OpenAI  = require('openai');

const openai = new OpenAI({
    apiKey: process.env.LLM_API_KEY
  });

app.use(cors());
app.use(express.json());

app.post('/api/v0/llm', async (req, res) => {
    const { prompt } = req.body;
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are an expert in Pact programming language. Provide assistance and answer questions using only Pact syntax and functions. Avoid any explanations in other languages or contexts." },
          { role: "user", content: prompt }
        ],
        model: "gpt-4o-mini",
      });
      res.json(completion.choices[0].message);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: error.message });
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
