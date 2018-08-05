const _ = require('lodash');
const { getSheetData, formatPage } = require('./../../utils/spreadshit-data-fetcher');
const { authorization } = require('./../../utils/google-authorization');

const config = require('./../../config');

const _filterDataByEmployee = ({ pages, identifiers }) =>
  pages.map(page => {
    const sections = page.sections.filter(section => {
      const identifierField = section.fields.find(field => field.index === page.employeeIdentifierIndex);
      return _.includes(identifiers, identifierField.value);
    });
    return { ...page, sections };
  });

const getEmployees = async (req, res) => {
  const page = config.employees;
  try {
    const auth = await authorization();
    const employeesData = await getSheetData({ auth, page });
    const data = employeesData.reduce((acc, employeeArr) => {
      const obj = {
        group: employeeArr[0],
        name: employeeArr[2],
        identifiers: employeeArr,

      };
      acc.push(obj);
      return acc;
    }, []);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

};

const getData = async (req, res) => {
  const { identifiers } = req.query;
  const { pages: pagesConfig } = config;
  try {
    const auth = await authorization();
    const pages = await Promise.all(pagesConfig.map(async (page) => {
      const sheetData = await getSheetData({ page, auth });
      return formatPage({ page, sheetData });
    }));

    const data = _filterDataByEmployee({ pages, identifiers });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getEmployees,
  getData,
};