const arrayConfusion = require("./index.js");

const { users, constantQueries } = require("./constants");

/**
 * @USER_DATA
{
    "name": "Stephanus",
    "description": " I'm a software engineer and I love building apps and websites in my free time."
},
 */

const priorities = {
  field: "description",
  queries: constantQueries,
};

const shake = arrayConfusion(users, priorities);

console.log(shake);
