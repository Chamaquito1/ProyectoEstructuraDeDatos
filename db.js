const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("dataStructure", "root", "", {
    host: "localhost",
    dialect: "mariadb"
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const models = require("./models/models.js")(sequelize, Sequelize);
db.stack = models.Stack;
db.queue = models.Queue;
db.array = models.Array;
module.exports = db;