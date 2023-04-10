import express from 'express';
import cors from 'cors';
import chalk from "chalk"

const app = express();
app.use(express.json());
app.use(cors())

const users = []; // {username, avatar}

const tweets = []; //{username, tweet}

app.post("/sign-up", (req, res) => {
    //const { username, avatar } = req.body;
    const user = req.body;

    if (!user.username.trim() || !user. avatar.trim()) {
        res.status(400).send("Todos os campos são obrigatórios!");
        return;
    }

    users.push(req.body)
    res.status(201).send("OK")


})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;

    //console.log(req.body.username)

    if (!username.trim() || !tweet.trim()) {
        res.status(400).send("Todos os campos são obrigatórios!");;
        return;
    }



    if (!users.find(user => user.username === username)) {
        res.status(401).send("UNAUTHORIZED");
        return;
    }

    tweets.push(req.body)
    res.status(201).send("OK")
})

app.get("/tweet", (req, res) => { })


const PORT = 5000;
app.listen(PORT, () => {
    console.log(chalk.green(`Rodando em http://localhost:${PORT}`));
});