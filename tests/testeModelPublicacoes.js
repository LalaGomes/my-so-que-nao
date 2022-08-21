const {Publicacoes, sequelize} = require('../database/models');

let teste = async () =>{
    let publicacoes = await Publicacoes.findAll()
    console.log(publicacoes.map(p => p.toJSON()));
    sequelize.close();
    //belongsTo
}

teste();