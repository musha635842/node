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
     return await queryInterface.bulkInsert('Comments', [{
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 1,
      authorsNickname: 'user1',
      postId: 1,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 2,
      authorsNickname: 'user2',
      postId: 1,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 3,
      authorsNickname: 'user3',
      postId: 2,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 4,
      authorsNickname: 'user4',
      postId: 2,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 5,
      authorsNickname: 'user5',
      postId: 3,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 6,
      authorsNickname: 'user6',
      postId: 3,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 7,
      authorsNickname: 'user7',
      postId: 4,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 8,
      authorsNickname: 'user8',
      postId: 4,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 9,
      authorsNickname: 'user9',
      postId: 5,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 10,
      authorsNickname: 'user10',
      postId: 5,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 1,
      authorsNickname: 'user1',
      postId: 6,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 2,
      authorsNickname: 'user2',
      postId: 6,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 3,
      authorsNickname: 'user3',
      postId: 7,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 4,
      authorsNickname: 'user4',
      postId: 7,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 5,
      authorsNickname: 'user5',
      postId: 8,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 6,
      authorsNickname: 'user6',
      postId: 8,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 7,
      authorsNickname: 'user7',
      postId: 9,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 8,
      authorsNickname: 'user8',
      postId: 9,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 9,
      authorsNickname: 'user9',
      postId: 10,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 10,
      authorsNickname: 'user10',
      postId: 10,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 1,
      authorsNickname: 'user1',
      postId: 11,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 2,
      authorsNickname: 'user2',
      postId: 11,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 3,
      authorsNickname: 'user3',
      postId: 12,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 4,
      authorsNickname: 'user4',
      postId: 12,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 5,
      authorsNickname: 'user5',
      postId: 13,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 6,
      authorsNickname: 'user6',
      postId: 13,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 7,
      authorsNickname: 'user7',
      postId: 14,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 8,
      authorsNickname: 'user8',
      postId: 14,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 9,
      authorsNickname: 'user9',
      postId: 15,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 10,
      authorsNickname: 'user10',
      postId: 15,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 1,
      authorsNickname: 'user1',
      postId: 16,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 2,
      authorsNickname: 'user2',
      postId: 16,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 3,
      authorsNickname: 'user3',
      postId: 17,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 4,
      authorsNickname: 'user4',
      postId: 17,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 5,
      authorsNickname: 'user5',
      postId: 18,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 6,
      authorsNickname: 'user6',
      postId: 18,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 7,
      authorsNickname: 'user7',
      postId: 19,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 8,
      authorsNickname: 'user8',
      postId: 19,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 9,
      authorsNickname: 'user9',
      postId: 20,
      published_at: new Date(Date.now()),
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt. Egestas maecenas pharetra convallis posuere morbi. ',
      userId: 10,
      authorsNickname: 'user10',
      postId: 20,
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
     return queryInterface.bulkDelete('Comments', null, {});
  }
};