const express = require("express")
const app = express()
const PORT = 3000

//1. Página inicial - Rota
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML</title>
</head>
<body>
    <h1>Catálogo de Heróis</h1>
    <p>Bem-vindo ao mundo da Marvel e da DC</p>

     <a href="/marvel">Marvel</a><br>
        <a href="/dc">DC</a><br>
        <hr>

         <a href="/homemdeferro">Homem de Ferro</a><br>
        <a href="/hulk">Hulk</a><br>
        <a href="/batman">Batman</a><br>
        <a href="/superman">Superman</a><br>
</body>
</html>`)
})

//2 Rotas das empresas
app.get("/marvel", (req, res) => {
    res.send(`
        <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marvel</title>
</head>
<body>
    <h1>MARVEL</h1>
    <p>
            A Marvel é uma empresa de histórias em quadrinhos e entretenimento
            conhecida por criar heróis famosos como Homem de Ferro, Hulk,
            Thor e Homem-Aranha.
    </p>

    <h2>Personagens</h2>
    <p>
        <a href="/homemdeferro">Homem de Ferro</a><br>
        <a href="/hulk">Hulk</a><br>
        <a href="/thor">Thor</a><br>
        <a href="/capitaoamerica">Capitão América</a><br>
        <a href="/wanda">Wanda</a><br>
        <a href="/capitamarvel">Capitã Marvel</a><br>
    </p>
    <a href="/">Voltar para a Página Inicial</a>
</body>
</html>`)
})

app.get("/dc", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DC</title>
</head>
<body>
    <h1>DC</h1>
    <p>
            A DC é conhecida por personagens como Batman e Superman.
    </p>

    <h2>Personagens</h2>
    <p>
        <a href="/superman">Super man</a><br>
        <a href="/batman">Batman</a><br>
        <a href="/mulhermaravilha">Mulher Maravilha</a><br>
        <a href="/lanternaverde">Lanterna Verde</a><br>
        <a href="/cyborg">Cyborg</a><br>
        <a href="/ravena">Ravena</a><br>
    </p>
    <a href="/">Voltar para a Página Inicial</a>`)
})

app.get('/homemdeferro', (req, res) => {
    res.send('Homem de Ferro é um herói da Marvel');
});

app.get('/hulk', (req, res) => {
    res.send('Hulk é um herói da Marvel');
});

app.get('/thor', (req, res) => {
    res.send('Thor é um herói da Marvel');
});

app.get('/capitaoamerica', (req, res) => {
    res.send('Capitão América é um herói da Marvel');
});

app.get('/wanda', (req, res) => {
    res.send('Wanda é um heróina da Marvel');
});

app.get('/capitamarvel', (req, res) => {
    res.send('Capitã Marvel é uma heróina da Marvel');
});

app.get('/batman', (req, res) => {
    res.send('Batman é um herói da DC');
});

app.get('/superman', (req, res) => {
    res.send('Superman é um herói da DC');
});

app.get('/mulhermaravilha', (req, res) => {
    res.send('Mulher Maravilha é uma heróina da DC');
});

app.get('/lanternaverde', (req, res) => {
    res.send('Lanterna Verde é um herói da DC');
});

app.get('/cyborg', (req, res) => {
    res.send('Cyborg é um herói da DC');
});

app.get('/ravena', (req, res) => {
    res.send('Ravena é uma heróina da DC');
});

//3  Rota com dois parâmetros obrigatórios
app.get('/personagem/:empresa/:nome', (req, res) => {

    const empresa = req.params.empresa;
    const nome = req.params.nome;

    res.send(`
        <html>
        <head>
            <title>Personagem</title>
        </head>
        <body>
            <h1>Informações do Personagem</h1>

            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Personagem:</strong> ${nome}</p>

            <a href="/">Voltar para Página Inicial</a>
        </body>
        </html>
    `);
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})