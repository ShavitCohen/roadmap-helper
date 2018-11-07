const { HR, LEADER, LIOR, FINANCE } = require('./constants');

const employees = {
  spreadsheetId: '1c5xPeWDm6JlEtwL-BhM3kVfIbUlNsf61Y4KaFoSlwtU',
  sheetId: 'employees',
  range: 'A2:M1000',
  groupIndex: 2,
  displayNameIndex: 1,
  identifiersIndex: [0, 1, 4, 7],
};

const topics = {
  general: {
    title: 'כללי',
    spreadsheetId: '1c5xPeWDm6JlEtwL-BhM3kVfIbUlNsf61Y4KaFoSlwtU',
    sheetId: 'employees',
    range: 'A2:ZZ1000',
    employeeIdentifierIndex: 0,
    sectionTitle: {
      index: 1,
    },
    fields: [
      {
        title: 'זמן בטיקל',
        index: 12,
        grid: 12,
      },
      {
        title: 'סטטוס משפחתי',
        index: 16,
        grid: 6,
      },
      {
        title: 'מספר ילדים',
        index: 18,
        grid: 6,
      },
    ],
  },
  'tech-profile': {
    title: 'פרופיל טכני',
    spreadsheetId: '1c5xPeWDm6JlEtwL-BhM3kVfIbUlNsf61Y4KaFoSlwtU',
    sheetId: 'employees',
    range: 'A2:ZZ1000',
    employeeIdentifierIndex: 0,
    sectionTitle: {
      index: 1,
    },
    fields: [
      {
        title: 'זמן בטיקל',
        index: 12,
        grid: 12,
      },
      {
        title: 'סטטוס משפחתי',
        index: 16,
        grid: 6,
      },
      {
        title: 'מספר ילדים',
        index: 18,
        grid: 6,
      },
    ],
  },
  'mission-satisfaction': {
    roles: [HR, LEADER, LIOR],
    title: 'שביעות רצון מהמשימה',
    spreadsheetId: '173F3_bTchw8o_FR7NTjGzsK3XhIc_hataXtWqpvPsdY',
    sheetId: 'Form Responses 1',
    range: 'A2:Z1000',
    employeeIdentifierIndex: 1,
    sectionTitle: {
      index: 0,
    },
    reverseSections: true,
    fields: [
      {
        title: 'שם הלקוח',
        index: 3,
        grid: 12,
      },
      {
        title: 'מידת שביעות רצון',
        index: 5,
        grid: 12,
      },
      {
        title: 'פירוט',
        index: 6,
        grid: 12,
      },
      {
        title: 'שביעות רצון בהיבט בינאישי',
        index: 7,
        grid: 6,
      },
      {
        title: 'פירוט',
        index: 8,
        grid: 6,
      },
      {
        title: 'באיזו תדירות מתפתח מקצועית',
        index: 9,
        grid: 6,
      },
      {
        title: 'פירוט',
        index: 10,
        grid: 6,
      },
      {
        title: 'הערות - הארות',
        index: 11,
        grid: 12,
      },
      {
        title: 'שביעות רצון מהליוי המקצועי',
        index: 12,
        grid: 12,
      },
      {
        title: 'חיבור למוביל',
        index: 13,
        grid: 4,
      },
      {
        title: 'באיזו רמה מרגיש נוח לפנות למוביל',
        index: 14,
        grid: 4,
      },
    ],
  },
  'client-satisfaction': {
    roles: [HR, LEADER, LIOR],
    title: 'שביעות רצון לקוח',
    spreadsheetId: '1aR4v8CnGwWaMG9xuIHsy1COcaIJXOsw3q3XIMN8RWKY',
    sheetId: 'Form Responses 1',
    range: 'A2:Z1000',
    employeeIdentifierIndex: 3,
    sectionTitle: {
      index: 0,
    },
    reverseSections: false,
    fields: [
      {
        title: 'שם הלקוח',
        index: 1,
        grid: 6,
      },
      {
        title: 'שם המעריך',
        index: 2,
        grid: 6,
      },
      {
        title: 'מידת שביעות רצון עם העבודה עם טיקל',
        index: 5,
        grid: 6,
      },
      {
        title: 'פירוט',
        index: 7,
        grid: 6,
      },
      {
        title: 'נקודות לשיפור מבחינה מקצועית',
        index: 7,
        grid: 6,
      },
      {
        title: 'איך היית מגדיר את העובד מבחינת הניסיון',
        index: 8,
        grid: 6,
      },
      {
        title: 'מידת שביעות הרצון מהעובד',
        index: 9,
        grid: 6,
      },
      {
        title: 'פירוט',
        index: 10,
        grid: 6,
      },
      {
        title: 'נקודות לשיפור מבחינת מתן השירות',
        index: 11,
        grid: 12,
      },
    ],
  },
};

module.exports = {
  employees,
  topics,
};