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
      defaultValue: DataTypes.UUIDV4
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
    steps: {
      type: DataTypes.STRING
    },
    image:{
      type: DataTypes.TEXT,
      defaultValue: "https://spoonacular.com/cdn/ingredients_100x100/chicken.jpg",
    },
    fromDB: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },{
    timestamps: false
});
};

