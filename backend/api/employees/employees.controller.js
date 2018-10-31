const _ = require('lodash');
const { getSheetData, formatPage } = require('./../../utils/spreadshit-data-fetcher');
const { authorization } = require('./../../utils/google-authorization');

const config = require('./../../config');

const _filterDataByEmployee = ({ pages, identifiers }) =>
  pages.map(page => {
    const sections = page.sections.filter(section => {
      const identifierField = identifiers.find(identifier => identifier === section.rawData[page.employeeIdentifierIndex]);
      return _.includes(identifiers, identifierField);
    });
    return { ...page, sections };
  });

const getEmployees = async (req, res) => {
  const groupName = req.params.groupName;
  const page = config.employees;
  try {
    const auth = await authorization();
    const employeesData = await getSheetData({ auth, page });
    const { groupIndex, displayNameIndex, identifiersIndex } = page;
    const data = employeesData.reduce((acc, employeeArr) => {
      const obj = {
        group: employeeArr[groupIndex],
        name: employeeArr[displayNameIndex],
        identifiers: identifiersIndex.map(index => employeeArr[index]),
      };
      if (obj.group.toLowerCase() === groupName.toLowerCase()) {
        acc.push(obj);
      }
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