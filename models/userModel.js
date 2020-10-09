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
        }
        // role: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }
    })
    
    return User;
}