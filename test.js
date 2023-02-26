const arrayConfusion = require("./index.js");

const users = require("./mockup.json").users;

/**
 * @USER_DATA
{
    "name": "Stephanus",
    "description": " I'm a software engineer and I love building apps and websites in my free time."
},
 */

const priorities = {
  field: "description",
  queries: [
    {
      priorityRate: 70,
      query: (priority) => priority.includes("love"),
      //query: (priority) => priority=="love"
      //query: (priority) => priority<15
    },
  ],
};

const shake = arrayConfusion(users, priorities);

console.log(shake);
