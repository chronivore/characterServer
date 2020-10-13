module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        role: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })
    
    return User;
}

//something in sequelize lets us put it in a default value for models;