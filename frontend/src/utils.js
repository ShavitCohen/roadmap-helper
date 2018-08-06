/*
  reorer users by their group
  @param {Array} obj
  @returns {Object}
*/
export const groupBy = (group) => {
  return group.reduce((obj, item) => {
    (typeof(obj[item.group]) != 'undefined') || (obj[item.group] = []);
    obj[item.group].push(item);
    return obj;
  }, {})
}
