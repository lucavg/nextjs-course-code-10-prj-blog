const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
} = require("next/constants");

module.exports = {
  env: {
    mongodb_username: process.env.mongodb_username,
    mongodb_password: process.env.mongodb_password,
    mongodb_clustername: process.env.mongodb_clustername,
    mongodb_database: process.env.mongodb_database,
  },
};