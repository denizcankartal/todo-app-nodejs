// CRUD operations getting started
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const databaseConfig = {
  ip: "127.0.0.1",
  port: 27017,
  databaseName: "todo-manager",
};

const connectionURL = `mongodb://${databaseConfig.ip}:${databaseConfig.port}`;
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    // callback will be called asynchrously
    if (error) {
      console.log("Unable to connect to the database");
      return;
    }
    console.log("connected to the database");
  }
);
