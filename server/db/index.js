const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/allies-nuptial-noshes",
  {
    logging: false, // unless you like the logs
    // ...and there are many other options you may want to play with
  }
);

const Recipe = db.define("recipe", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  recipe: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  instructions: {
    type: Sequelize.STRING,
  },
  whySpecial: {
    type: Sequelize.TEXT,
  },
  sentimentalNote: {
    type: Sequelize.TEXT,
  },
});

module.exports = { db, Recipe };
