const csv = require('csvtojson');

const csvFilePath = '../data/collection.csv';

const etl = async () => {
  try {
    const jsonArr = await csv().fromFile(csvFilePath);
    console.log(jsonArr);
    console.log(Object.keys(jsonArr[0]));
  } catch (err) {
    console.log('err getting csv to json:', err);
  }
};

etl();
