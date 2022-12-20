import Sequelize from "sequelize";
import lightDB  from "../Config/dbConfig.js";

const {DataTypes} = Sequelize;
 const lightModel = lightDB.define("status", {
    name: {
        type: DataTypes.STRING
    },
    contact: {
        type: DataTypes.DOUBLE
    },
    address: {
        type: DataTypes.STRING
    },
    message: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
export default lightModel;