const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
    });
    const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    db.articles = require("./articles.model.js")(sequelize, Sequelize);
    
    module.exports = db;
    //Don’t forget to call sync() method in server.js:
    
    const app = express();
    app.use(...);
    
    const db = require("./app/models");
    db.sequelize.sync();