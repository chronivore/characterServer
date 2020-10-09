module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define('character', {
        name: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        race: {
            type: DataTypes.STRING,
            allowNull: false
        },
        occupation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        skills: {
            type: DataTypes.STRING,
            allowNull: false
        },
        miscellaneous: {
            type: DataTypes.STRING,
            allowNull: true
        }
})
return Character;
}
  