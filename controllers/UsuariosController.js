const {Usuario, sequelize} = require('../database/models');

const bcrypt = require('bcrypt');

module.exports = {
    create: (req,res)=>{
        res.render('usuarioCreate.ejs')
    },
    store: async (req,res)=>{
        //Capturar as informações vindas do formulário
        const {nome, emal, senha, confirmacao} = req.body;

        // Verificar se a senha bate com a informação...
        // Caso não bata, mandar a msg de erro... e finalizar função

        // Inserir as informações no BD
       const u = await Usuario.create(
            {
                nome,
                email,
                senha:bcrypt.hashSync(senha, 10)
            }
        )
        // Enviar uma mensagem de sucesso!
        res.send(u);
    }
}