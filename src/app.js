import express, { json } from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(json());


const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Rodando em http://localhost:${PORT}`);
});