//Rota parametrizada, contém informações adicionais na URL(endereço).
//A informação adicional é capturada atráves do parâmetro da URl, 
//representado na rota pela pela sintaxe :id
//localhost:3000/usuario/1, O número 1 será armazenado na variável id
const usurios = [
    {id:1, nome: 'João', idade: 31 },
    {id:1, nome: 'Daniel', idade: 19 },
    {id:1, nome: 'Sérgio', idade: 25 }
];

module.exports = usurios