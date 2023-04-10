import express from 'express';
import cors from 'cors';
import chalk from "chalk"

const app = express();
app.use(express.json());
app.use(cors())

const user = []; // {username, avatar}
const tweet = []; //{username, tweet}

app.post("/sing-up", (req, res) => {
    const { username, avatar } = req.body;

    if (!username.trim() || !avatar.trim()) {
        res.status(404).send("Todos os campos são obrigatórios!");;
        return;
    }

    user.push(req.body)
    res.status(201).send("OK")


})
app.post("/tweet", (req, res) => { })
app.get("/tweet", (req, res) => { })



const PORT = 5000;
app.listen(PORT, () => {
    console.log(chalk.green(`Rodando em http://localhost:${PORT}`));
});