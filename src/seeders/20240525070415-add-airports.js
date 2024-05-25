'use strict';

// const { update } = require('../../controllers/city-controller');
// const city = require('../../models/city');

/** @type {import('sequelize-cli').Migration} */
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
                                                             //becoz in migrations it is Airports
    await queryInterface.bulkInsert('Airports',[            //Upar jo syntax likha hai whi follow kar rhe
      {           
      name:"Kempegowda International Airport",
      cityId:7,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {           
      name:"Netaji Subhas Chandra Bose International Airport",
      cityId:1,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {           
      name:"Mysuru Airport",
      cityId:7,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {           
      name:"Mangaluru Airport",
      cityId:7,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {           
      name:"Indira Gandhi International Airport",
      cityId:2,
      createdAt:new Date(),
      updatedAt:new Date(),
    }
  ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    
    
  }
};
