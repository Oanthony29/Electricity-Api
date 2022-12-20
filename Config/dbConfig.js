import Sequelize  from "sequelize";

const lightDB = new Sequelize("ekoDB", "root", "root",{
host: "localhost",
dialect: "mysql"
});

export default lightDB;