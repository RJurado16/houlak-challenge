module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('search', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    artist_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    requested: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  });
  return model;
};