import {Sequelize, DataTypes} from 'sequelize';

export default (sequelize: Sequelize) => {
  const User = sequelize.define(
    'user',
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {timestamps: true},
  );
  return User;
};
