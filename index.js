const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const sheets = google.sheets('v4');
const config = require('./config');
const express = require('express');

// If modifying these scopes, delete credentials.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = 'credentials.json';
const app = express();

// Load client secrets from a local file.
fs.readFile('client_secret.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), generateDataFromConfig);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return callback(err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

const arr = [];
const generateDataFromConfig = async (auth) => {
  const { pages } = config;
  for (const i in pages) {
    arr.push(await getData(pages[i], auth));
  }
  console.log(arr);
};

const getData = async (page, auth) => {
  const { spreadsheetId, sheetId, range } = page;
  const request = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId,  // TODO: Update placeholder value.
    range: `'${sheetId}'!${range}`,  // TODO: Update placeholder value.
    majorDimension: 'ROWS',
    valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.
    dateTimeRenderOption: 'FORMATTED_STRING',  // TODO: Update placeholder value.
    auth: auth,
  };

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get(request, function (err, response) {
      if (err) {
        return reject(err);
      }
      const { data: { values } } = response;
      return resolve(formatData({ values, page }));
    });
  });
};

const formatData = ({ values, page }) => {
  const { fields, title, sectionTitle } = page;
  const sections = values.map(section => {
    const formattedFields = fields.map(field => {
      const { title, grid, index } = field;
      return { title, grid, value: section[index], index };
    });

    return {
      title: { ...sectionTitle, value: section[sectionTitle.index] },
      fields: formattedFields,
    };
  });
  return {
    title,
    sections,
  };
};

const getDataByName = (userNames, page, workerIdentifierIndex) => {
  const filteredData = page.sections.filter((section) => {
    section.fields.map(field => console.log(field.index));
    const isUserSection = section.fields.find(field => {
      return (field.index === workerIdentifierIndex && userNames.includes(field.value));
    });
    return isUserSection;
  });

  return filteredData;
}


app.get('/', (req, res) => {
  res.send(arr);
});

app.get('/get_employees', (req, res) => {
  const employees = arr.find((page) => {
    return page.title == 'Group Members Names';
  });
  res.send(employees);
});

app.get('/get_data/:username', (req, res) => {
  const userName = req.params.username;
  const satisfactionPage =  arr.find((page) => {
    return page.title == 'שביעות רצון מהמשימה';
  });

  let satisfactionPageIndex = config.pages.find((page) => {
    return page.title == 'שביעות רצון מהמשימה';
  });
  satisfactionPageIndex = satisfactionPageIndex.workerIdentifierIndex;
  
  const namesPage = arr.find((page) => {
    return page.title == 'permutations names';
  });

  // get permutations obj for userName
  let userNames = namesPage.sections.find((namesObj) => {
    return namesObj.fields.find((name) => {
      return name.value == userName;
    })
  });
  userNames = userNames.fields.map(name => name.value);

  const data = getDataByName(userNames, satisfactionPage, satisfactionPageIndex);
  res.send(data);
});


const server = app.listen(3000, function() {
  console.log('Server running at https://localhost:' + server.address().port);
});