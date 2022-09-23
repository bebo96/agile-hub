const { Project } = require('../models');

const projectdata = [
  {
    title: 'Donec posuere',
    customer_name: 'customer1',
    user_id: 10
  },
  {
    title: 'Morbi non',
    customer_name: 'customer2',
    user_id: 8
  },
  {
    title: 'Donec diam',
    customer_name: 'customer1',
    user_id: 1
  },
  {
    title: 'Nunc purus',
    customer_name: 'customer2',
    user_id: 4
  },
  {
    title: 'Pellentesque eget',
    customer_name: 'customer4',
    user_id: 7
  },
  {
    title: 'Lorem ipsum',
    customer_name: 'customer3',
    user_id: 4
  },
  {
    title: 'In hac',
    customer_name: 'customer3',
    user_id: 1
  },
  {
    title: 'Morbi non',
    customer_name: 'customer1',
    user_id: 1
  },
  {
    title: 'Duis ac nibh',
    customer_name: 'customer2',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum',
    customer_name: 'customer4',
    user_id: 5
  },
  {
    title: 'In hac',
    customer_name: 'customer5',
    user_id: 3
  },
  {
    title: 'Morbi odio',
    customer_name: 'customer4',
    user_id: 10
  },
  {
    title: 'Donec dapibus',
    customer_name: 'customer4',
    user_id: 8
  },
  {
    title: 'Nulla tellus',
    customer_name: 'customer2',
    user_id: 3
  },
  {
    title: 'Cras mi pede',
    customer_name: 'customer3',
    user_id: 3
  },
  {
    title: 'Vestibulum ante',
    customer_name: 'customer1',
    user_id: 7
  },
  {
    title: 'In hac',
    customer_name: 'customer3',
    user_id: 6
  },
  {
    title: 'Etiam justo',
    customer_name: 'customer2',
    user_id: 4
  },
  {
    title: 'Nulla ut erat',
    customer_name: 'customer5',
    user_id: 6
  },
  {
    title: 'Integer pede justo',
    customer_name: 'customer3',
    user_id: 7
  }
];

const seedProjects = () => Project.bulkCreate(projectdata);

module.exports = seedProjects;
