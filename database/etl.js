
const csv = require('csvtojson');
const parser = require('xml2js');
const axios = require('axios');
const htmlentities = require('html-entities');
const mongoose = require('mongoose');

const csvFilePath = '../data/collection.csv';
// const xmlWrapper = require('fix-esm').require('@code-bucket/board-game-geek');
// import { parseBggXmlApi2ThingResponse } from '@code-bucket/board-game-geek';

// connect here
mongoose.connect('mongodb://localhost/mvp');

const userSchema = mongoose.Schema({
  objectId: String,
  userGame: Object,
});

const UserCol = mongoose.model('UserCol', userSchema);

const gameSchema = mongoose.Schema({
  objectId: String,
  thing: Object,
});

const Game = mongoose.model('Game', gameSchema);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const msDelay = 300; // in milliseconds

const etl = async () => {
  try {
    const jsonArr = await csv().fromFile(csvFilePath);
    return jsonArr;
  } catch (err) {
    console.log('err getting csv to json:', err);
    return [];
  }
};

const xmlEtl = async (objectId) => {
  try {
    await delay(msDelay);
    const url = `https://boardgamegeek.com/xmlapi2/thing?id=${objectId}`;
    const resp = await axios.get(url);
    const result = await parser.parseStringPromise(resp.data);
    return result;
    // console.log(decoded);
  } catch (err) {
    console.log('xml error', err);
    return {};
  }
};

const dbAdd = async () => {
  // schema one

  const jsonUserArr = await etl();
  const saveOut = [];
  // console.log(jsonUserArr);
  // for (let i = 0; i < jsonUserArr.length; i += 1) {
  //   // console.log('object id', jsonUserArr[i].objectid);
  //   // console.log(jsonUserArr[i]);
  //   const userGame = new UserCol({
  //     objectId: jsonUserArr[i].objectid,
  //     userGame: jsonUserArr[i],
  //   });

  //   saveOut.push(userGame.save());
  // }

  // let userGame = new UserCol({
  //   objectId: jsonUserArr[0].objectid,
  //   userGame: jsonUserArr[0],
  // });

  // const resp = await userGame.save();
  // const respArr = await Promise.all(saveOut);
  // console.log('response saving', respArr);

  const apiPromises = [];
  for (let i = 0; i < jsonUserArr.length; i += 1) {
    // console.log(jsonUserArr[i].objectid);
    apiPromises.push(xmlEtl(jsonUserArr[i].objectid));
    // const decoded = htmlentities.decode(JSON.stringify(result));
    // if (i >= 61) {
      // break;
    // }
  }

  const apiData = await Promise.all(apiPromises);

  console.log('decoded', apiData.length);

  // console.log('decoded one', JSON.stringify(apiData[apiData.length - 1]));
  console.log('api data', JSON.stringify(apiData[0].items.item[0].$.id));

  for (let i = 0; i < apiData.length; i += 1) {
    const gameInfo = new Game({
      objectId: apiData[i].items.item[0].$.id,
      thing: apiData[i].items.item,
    });
    saveOut.push(gameInfo.save());

    // if (i >= 5) {
    //   break;
    // }
  }
  // let gameInfo = new Game({
  // });
  // const
  // console.log('saved response');
  // console.log(jsonUserArr.length);

  try {
    const resp = await Promise.all(saveOut);
    console.log('Response saving');
    console.log(resp);
  } catch (err) {
    console.log('error saving:', err);
  }

  mongoose.connection.close();
};

dbAdd();
// xmlEtl();
// etl();

// const xmlEtl = async () => {
//   let result = '';
//   try {
//     const resp = await axios.get('https://boardgamegeek.com/xmlapi2/thing?id=207830');
//     console.log(resp);
//     const result = await xmlWrapper.parseBggXmlApi2ThingResponse(resp.data);
//     console.log(result);
//   } catch (err) {
//     console.log('xml error', err);
//   }

//   return result;
// };

// etl();

// const x = `<root>
//     <item>
//       Hello
//     </item>
//     <item>
//       World
//     </item>
//   </root>
//   `;

// const xmlEtl = async () => {
//   let result = '';
//   try {
//     const result = await parser.parseStringPromise(x);
//     console.log(JSON.stringify(result));
//   } catch (err) {
//     console.log('xml error', err);
//   }

//   return result;
// };
