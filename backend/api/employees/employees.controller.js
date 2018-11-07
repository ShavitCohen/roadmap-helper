const _ = require('lodash');

const { getSheetData, formatPage } = require('./../../utils/spreadshit-data-fetcher');
const { authorization } = require('./../../utils/google-authorization');
const { ALL } = require('../../constants');
const config = require('../../dataConfig');

const getEmployees = async (req, res) => {
  const { group } = req.auth;
  const topic = config.employees;
  try {
    const auth = await authorization();
    const employeesData = await getSheetData({ auth, topic });
    const { groupIndex, displayNameIndex, identifiersIndex } = topic;
    const data = employeesData.reduce((acc, employeeArr) => {
      const obj = {
        group: employeeArr[groupIndex],
        name: employeeArr[displayNameIndex],
        identifiers: identifiersIndex.map(index => employeeArr[index]),
      };
      if (obj.group.toLowerCase() === group.toLowerCase() || group === ALL) {
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

module.exports = {
  getEmployees,
};