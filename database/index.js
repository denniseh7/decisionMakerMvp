const mongoose = require('mongoose');
require('dotenv').config();

// get database path
const { DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;
const dbPath = `mongodb://${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`;

// connect to database
mongoose.connect(dbPath);
const db = mongoose.connection;

console.log('Database Connected:', dbPath);

// const testFunc = async () => {
//   const result = await UserCol.findOne();
//   console.log('database result game', result);
// };
// testFunc();
// db.close();

module.exports = db;
