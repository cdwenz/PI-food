const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// function generateMyId(){
//   return sequelize.UUID
// }
// defaultValue: function() {
//   return generateMyId()
// }

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    score:{
      type: DataTypes.INTEGER
    },
    health:{
      type: DataTypes.INTEGER
    },
    step: {
      type: DataTypes.TEXT
    },
    fromDB: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },{
    timestamps: false
});
};

