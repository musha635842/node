'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return await queryInterface.bulkInsert('Users', [{
      nickname: 'user1',
      image: '',
      email: 'user1@email.com',
      password: 'user1',
      token: '',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      nickname: 'user2',
      image: '',
      email: 'user2@email.com',
      password: 'user2',
      token: '',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      nickname: 'user3',
      image: '',
      email: 'user3@email.com',
      password: 'user3',
      token: '',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      nickname: 'user4',
      image: '',
      email: 'user4@email.com',
      password: 'user4',
      token: '',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      nickname: 'user5',
      image: '',
      email: 'user5@email.com',
      password: 'user5',
      token: '',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      nickname: 'user6',
      image: '',
      email: 'user6@email.com',
      password: 'user6',
      token: '',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      nickname: 'user7',
      image: '',
      email: 'user7@email.com',
      password: 'user7',
      token: '',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      nickname: 'user8',
      image: '',
      email: 'user8@email.com',
      password: 'user8',
      token: '',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      nickname: 'user9',
      image: '',
      email: 'user9@email.com',
      password: 'user9',
      token: '',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      nickname: 'user10',
      image: '',
      email: 'user10@email.com',
      password: 'user10',
      token: '',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
