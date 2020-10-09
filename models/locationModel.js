const sequelize = require('../db');

module.exports = (sequelize, DataTypes) => {
    const Loc = sequelize.define('loc', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        climate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        technology: {
            type: DataTypes.STRING,
            allowNull: false
        },
        miscellaneous: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // userId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // charId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // }

    })
    return Loc;
}