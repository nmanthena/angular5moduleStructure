'use strict';
const env = process.env.NODE_ENV;

const development = {
    host: 'ek-dev-db-instance-cluster.cluster-cwmb3qfdlgqv.us-east-1.rds.amazonaws.com',
    user: 'ekdevdbadmin',
    password: 'Ea$yKn0ck$786',
    database: 'test',
    connections: 100,
};
const qaenv = {
    host: '',
    user: '',
    password: '',
    database: '',
    connections: 500,
};

const config = { development, qaenv };

module.exports = development;