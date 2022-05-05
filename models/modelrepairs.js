const { DataTypes } = require ('sequelize');
const { cc } = require ('../utils/database');

const Repair = cc.define ('repairs' , {
    id: {
        primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
},
date: {
    type: DataTypes.DATE,
    allowNull: false,
},
computerNumber: {
    allowNull: false,
    type: DataTypes.INTEGER,
},
comments: {
    allowNull: false,
    type: DataTypes.STRING,
},
status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
},

userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
module.exports = { Repair };

//repairs - valuedefault: pending

