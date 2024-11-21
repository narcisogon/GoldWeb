// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.REACT_APP_BACKEND_URL2, // Replace with your frontend's origin if different
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(bodyParser.json());

// Chatbot endpoint
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: 'No message provided.' });
    }

    try {
        console.log('User Message:', userMessage);

        const response = await axios.post(
            'https://api.sambanova.ai/v1/chat/completions', // Ensure this is the correct endpoint
            {
                stream: false, // Set to true if you need streaming
                model: "Meta-Llama-3.1-8B-Instruct", // Ensure this matches SamBanova's API requirements
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant"
                    },
                    {
                        role: "user",
                        content: userMessage
                    }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.META_LLAMA_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log('API Response:', response.data);

        // Adjust based on actual response structure
        const botResponse = response.data.choices && response.data.choices[0].message && response.data.choices[0].message.content
            ? response.data.choices[0].message.content.trim()
            : "I'm sorry, I couldn't process that.";

        res.json({ response: botResponse });
    } catch (error) {
        console.error('Error communicating with Meta LLaMA API:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error processing the message.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
