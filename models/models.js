module.exports = (sequelize, Sequelize) => {
    
  const Stack = sequelize.define(
    "Stack",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      data: {
        type: Sequelize.JSON,
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "stack",
    }
  );
  const Queue = sequelize.define(
    "Queue",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      data: {
        type: Sequelize.JSON,
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "queue",
    }
  );
  const Array = sequelize.define(
    "Array",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      data: {
        type: Sequelize.JSON,
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "array",
    }
  );



  

  return {Stack, Queue, Array}


};