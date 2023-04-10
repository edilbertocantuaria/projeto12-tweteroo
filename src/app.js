import express from 'express';
import cors from 'cors';
import chalk from "chalk"

const app = express();
app.use(express.json());
app.use(cors())

const users = [{
    username: "bobesponja",
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png"
}
]; // {username, avatar}

const tweets = [
    {
        username: "bobesponja",
      tweet: "Eu amo o lulamolusco!"
    }

]; //{username, tweet}

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;

    if (!username.trim() || !avatar.trim()) {
        res.status(400).send("Todos os campos são obrigatórios!");;
        return;
    }

    users.push(req.body)
    res.status(201).send("OK")


})

app.post("/tweet", (req, res) => {
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