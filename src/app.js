import express from 'express';
import cors from 'cors';
import chalk from "chalk"

const app = express();
app.use(express.json());
app.use(cors())

const user =[]; // {username, avatar}
const tweet=[]; //{username, tweet}



const PORT = 5000;
app.listen(PORT, () => {
    console.log(chalk.green(`Rodando em http://localhost:${PORT}`));
});