const Sequalize = require("Sequelize");
const db = require("../config/db");

const User = db.define(
    "user",
{
 username: {type: Sequalize.STRING},
 email: {type: Sequalize.STRING},
 password: {type: Sequalize.STRING},
},
{
    //agar akhiranya tidak memakai S karena Sequilize
    freezeTableName: true
});

module.exports = User;