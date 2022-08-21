const { Usuario, sequelize } = require('../database/models');

const bcrypt = require('bcrypt');

module.exports = {
    create: (req, res) => {
        res.render('usuarioCreate.ejs')
    },
    store: async (req, res) => {
        //Capturar as informações vindas do formulário
        const { nome, email, senha, confirmacao } = req.body;

        // Verificar se a senha bate com a informação...
        if (senha !== confirmacao) {
            res.render('error.ejs', { msg: "Senha e confirmação não conferem." })
            return;
        }
        // Caso não bata, mandar a msg de erro... e finalizar função

        // Inserir as informações no BD
        const u = await Usuario.create(
            {
                nome,
                email,
                senha: bcrypt.hashSync(senha, 10)
            }
        )

        req.session.Usuario = u;

        // Direciona o visitante para o dendereço /home!
        res.redirect('/home')
    },
    mostrarHome: (req, res) => {
        let nome = req.session.Usuario.nome;

        res.render('home.ejs', { nome });
    }
}