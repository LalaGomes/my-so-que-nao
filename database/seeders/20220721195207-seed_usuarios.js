const bcrypt = require('bcrypt');

const usuarios = [
  {
    id: 1,
    nome: "Lara Gomes",
    email: "lara.lays..bh5@gmail.com",
    senha: bcrypt.hashSync("123456", 10),
    foto: "lara.jpg"
  },
  {
    id: 2,
    nome: "Ana Carol",
    email: 'anacarol@gmail.com',
    senha: bcrypt.hashSync("303030", 10),
    foto: "ana.jpg"
  },
  {
    id: 3,
    nome: "Geovanna Lessa",
    email: 'geovanna@gmail.com',
    senha: bcrypt.hashSync("305430", 10),
    foto: "geo.jpg"
  },
]
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('usuarios', usuarios, {});
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios', null, {});
  }
};
