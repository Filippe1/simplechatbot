This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started
First download this repository.
Second, install ollama and run qwen model (or any other model, but you will need to modify the code). Run the code to download model:

```bash
ollama run qwen2.5:0.5b
```
Then write the following in CLI to exit the model chat: 
```bash
/bye
```
Now you can run the ai chat system in development mode: 
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result to interact with chatsystem.
Everything should be working now. 

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/chat). This endpoint can be edited in `pages/api/chat.js`.


## Learn More

You can check out [Geist](https://ollama.com) to find how to get localLLM working before running this project.

