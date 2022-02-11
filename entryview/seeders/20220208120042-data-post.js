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
   return await queryInterface.bulkInsert('Posts', [{
      title: 'post1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 1,
      authorsNickname: 'user1',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 1,
      authorsNickname: 'user1',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 2,
      authorsNickname: 'user2',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 2,
      authorsNickname: 'user2',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post5',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 3,
      authorsNickname: 'user3',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post6',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 3,
      authorsNickname: 'user3',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post7',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 4,
      authorsNickname: 'user4',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post8',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 4,
      authorsNickname: 'user4',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post9',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 5,
      authorsNickname: 'user5',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post10',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 5,
      authorsNickname: 'user5',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post11',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 6,
      authorsNickname: 'user6',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post12',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 6,
      authorsNickname: 'user6',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post13',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 7,
      authorsNickname: 'user7',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post14',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 7,
      authorsNickname: 'user7',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post15',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 8,
      authorsNickname: 'user8',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post16',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 8,
      authorsNickname: 'user8',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post17',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 9,
      authorsNickname: 'user9',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post18',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 9,
      authorsNickname: 'user9',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post19',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 10,
      authorsNickname: 'user10',
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      title: 'post20',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Montes nascetur ridiculus mus mauris vitae ultricies.',
      userId: 10,
      authorsNickname: 'user10',
      published_at: new Date(Date.now()),
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
     return queryInterface.bulkDelete('Posts', null, {});
  }
};
