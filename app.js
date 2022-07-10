//importando o módulo express
const express = require('express');
//Executando a função express() para obter as ferramentas 
//necessárias para trabalhar com express
const app = express();
//definindo uma rota de acesso ao sistema
//parametro 1: caminho ou url da rota
//parametro 2: callback  a ser executado toda vez que acessamos a rota.
app.get('/'), (req, res)=>{
    return res.send ('Olá Mundo!')
}
//Rota parametrizada, contém informações adicionais na URL(endereço).
//A informação adicional é capturada atráves do parâmetro da URl, representado na rota pela pela sintaxe :id
//localhost:3000/usuario/1, O número 1 será armazenado na variável id
const usuarios = require ('./models/usuarios');
const usuariosController = require('./controllers/usuarios')
app.get('/usuario/:id', usuariosController.get);    
//Disponilizamos uma porta para que nosso
//computador possa receber mensagens atráves dela
//Acessar o endereço atráves do navegador http://localhost:3000/
//"app.listen" precisa estar por ultimo no arquivo.
app.listen(3000,()=>{
    console.log("Servidor rodando no endereço http://localhost:3000/")
} )