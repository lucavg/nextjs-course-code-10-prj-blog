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

// module.exports = (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       env: {
//         mongodb_username: "exorra",
//         mongodb_password: "rN53bOasKMgMb6QI",
//         mongodb_clustername: "cluster0",
//         mongodb_database: "my-site-dev",
//       },
//     };
//   }
//   if (phase === PHASE_PRODUCTION_SERVER) {
//     return {
//       env: {
//         mongodb_username: process.env.mongodb_username,
//         mongodb_password: process.env.mongodb_password,
//         mongodb_clustername: process.env.mongodb_clustername,
//         mongodb_database: process.env.mongodb_database,
//       },
//     };
//   }

//   return {
//     env: {
//       mongodb_username: "exorra",
//       mongodb_password: "rN53bOasKMgMb6QI",
//       mongodb_clustername: "cluster0",
//       mongodb_database: "my-site",
//     },
//   };
// };
