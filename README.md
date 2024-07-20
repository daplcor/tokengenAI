# tokengenAI

A simple example of how to generate text prompts via OpenAI.

## Getting Started

### Installation

To run this code, start with the following commands:

```sh
npm install
npm run dev
```

### Usage

To use the API, you can make a POST request to the `/api/v0/llm` endpoint. Here is an example of how to make a request using curl:

```sh
curl -X POST http://localhost:3000/api/v0/llm \
     -H "Content-Type: application/json" \
     -d '{
       "prompt": "Your prompt here"
     }'
```