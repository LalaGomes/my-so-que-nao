const {Usuario, sequelize} = require('../database/models');

let teste = async () =>{
    let usuarios = await Usuario.findAll({include:"publicacoes"});
    console.log(usuarios.map(p=>p.toJSON()));
    sequelize.close();
}

teste();