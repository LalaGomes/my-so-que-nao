const amizades=[
  {
    id:1,
    usuarios_id: 1,
    usuarios_id: 2,
    aceita:0
  },
  {
    id:2,
    usuarios_id: 1,
    usuarios_id: 3,
    aceita:1
  },
  {
    id:3,
    usuarios_id: 2,
    usuarios_id: 3,
    aceita:1
  }
]
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('amizades', amizades, {});
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('amizades', null, {});
  }
};