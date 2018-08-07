const { google } = require('googleapis');
const sheets = google.sheets('v4');

const getSheetData = async ({ page, auth }) => {
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
    sheets.spreadsheets.values.get(request, (err, response) => {
      if (err) {
        return reject(err);
      }
      const { data: { values } } = response;
      return resolve(values);
    });
  });
};

const formatPage = ({ sheetData, page }) => {
  const { fields, title, sectionTitle, employeeIdentifierIndex } = page;
  const sections = sheetData.map(section => {
    const formattedFields = fields.map(field => {
      const { title, grid, index } = field;
      return { title, grid, value: section[index], index, rawData: section };
    });

    return {
      title: { ...sectionTitle, value: section[sectionTitle.index] },
      fields: formattedFields,
      rawData: section,
    };
  });
  return {
    title,
    sections,
    employeeIdentifierIndex,
  };
};

module.exports = {
  getSheetData,
  formatPage,
};