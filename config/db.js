const sequalize = require("sequelize");

const db = new sequalize("crudsederhananode", "root", "",{
    dialect: "mysql"
});

db.sync =({});

module.exports= db;