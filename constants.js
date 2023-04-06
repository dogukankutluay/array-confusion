module.exports = {
  users: [
    {
      name: "Stephanus",
      description:
        " I'm a software engineer and I love building apps and websites in my free time.",
    },
    {
      name: "Joseito",
      description:
        "I'm a teacher and I'm passionate about helping children learn and grow.",
    },
    {
      name: "Lanny",
      description:
        " I'm a chef and I love experimenting with new ingredients and flavors in the kitchen.",
    },
    {
      name: "Royce",
      description:
        "I'm a freelance writer and I enjoy telling stories and sharing ideas through my writing.",
    },
    {
      name: "Trev",
      description:
        "I'm Michael. I'm a musician and I love composing and performing my own music.",
    },
  ],
  constantQueries: [
    {
      priorityRate: 70,
      query: (priority) => priority.includes("love"),
      //query: (priority) => priority=="love"
      //query: (priority) => priority<15
    },
  ],
};
