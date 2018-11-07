const _ = require('lodash');
const { authorization } = require('./../../utils/google-authorization');
const { getSheetData, formatData } = require('../../utils/spreadshit-data-fetcher');
const { topics } = require('../../dataConfig');

const _filterDataByEmployee = ({ topic, sheetData, identifiers }) =>
  sheetData.filter(row =>
    identifiers.find(identifier => identifier === row[topic.employeeIdentifierIndex]));

const getTopics = async (req, res) => {
  const { group: userGroup, role: userRole } = req.auth;
  const topicsToReturn = _.keys(topics).reduce((acc, topicId) => {
    const topic = _.get(topics, topicId);
    const { title } = topic;
    if (topic.roles && !topic.roles.includes(userRole)) {
      return;
    }
    if (topic.group && !topic.groups.includes(userGroup)) {
      return;
    }
    acc.push({ id: topicId, title });
    return acc;
  }, []);

  res.json(topicsToReturn);
};

const getTopicData = async (req, res) => {
  const { group: userGroup, role: userRole } = req.auth;
  const { identifiers } = req.query;
  const { topicId } = req.params;

  try {
    const auth = await authorization();
    const topic = topics[topicId];
    const sheetData = await getSheetData({ topic, auth });
    const sheetDataForEmployee = _filterDataByEmployee({ topic, sheetData, identifiers });
    const data = formatData({ topic, sheetData: sheetDataForEmployee, userGroup, userRole });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getTopics,
  getTopicData,
};