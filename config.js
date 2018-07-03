const config =
  {
    menu: {
      title: 'תפריט',
      spreadsheetId: '1oFc-PN1nMLswFW40h-yKy5UVgko-aARRiIVnDtIZQo4',
      sheetId: 'Group Members',
      range: 'A2:A1000',
      workerIdentifierIndex: [0,3,6],
      index: 0,
    },
    pages: [
      {
        title: 'Group Members Names',
        spreadsheetId: '1oFc-PN1nMLswFW40h-yKy5UVgko-aARRiIVnDtIZQo4',
        sheetId: 'Group Members',
        range: 'A2:Z1000',
        workerIdentifierIndex: 0,
        sectionTitle: {
          index: 0,
        },
        fields: [
          {
            title: 'שם',
            index: 0,
            grid: 12,
          }
        ],
      },
      {
        title: 'כללי',
        spreadsheetId: '1oFc-PN1nMLswFW40h-yKy5UVgko-aARRiIVnDtIZQo4',
        sheetId: 'Group Members',
        range: 'A2:Z1000',
        workerIdentifierIndex: 0,
        sectionTitle: {
          index: 0,
        },
        fields: [
          {
            title: 'שם',
            index: 0,
            grid: 12,
          },
          {
            title: 'לקוח נוכחי',
            index: 10,
            grid: 12,
          },
          {
            title: 'רמת מומחיות',
            index: 2,
            grid: 3,
          },
          {
            title: 'פרופיל טכני',
            index: 4,
            grid: 3,
          },
          {
            title: 'רמת מומחיות',
            index: 5,
            grid: 3,
          },
          {
            title: 'רואדמאפ אחרון',
            index: 9,
            grid: 3,
          },
        ],
      },
      {
        title: 'permutations names',
        spreadsheetId: '1oFc-PN1nMLswFW40h-yKy5UVgko-aARRiIVnDtIZQo4',
        sheetId: 'Group Members Names',
        range: 'A2:Z1000',
        workerIdentifierIndex: 0,
        sectionTitle: {
          index: 0,
        },
        fields: [
          {
            title: 'name',
            index: 0,
            grid: 12,
          },
          {
            title: 'שם',
            index: 1,
            grid: 12,
          },
          {
            title: 'id',
            index: 2,
            grid: 3,
          },
          {
            title: 'email',
            index: 3,
            grid: 3,
          },
          {
            title: 'name2',
            index: 4,
            grid: 3,
          },
        ],
      },
      {
        title: 'שביעות רצון מהמשימה',
        spreadsheetId: '1oFc-PN1nMLswFW40h-yKy5UVgko-aARRiIVnDtIZQo4',
        sheetId: 'satisfaction',
        range: 'A2:Z1000',
        workerIdentifierIndex: 1,
        sectionTitle: {
          index: 0,
        },
        fields: [
          {
            title: 'Email Address',
            index: 1,
            grid: 12,
          },
          {
            title: 'שם העובד',
            index: 2,
            grid: 12,
          },
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
            grid: 12,
          },
          {
            title: 'פירוט',
            index: 8,
            grid: 3,
          },
          {
            title: 'באיזו תדירות מתפתח מקצועית',
            index: 9,
            grid: 3,
          },
          {
            title: 'פירוט',
            index: 10,
            grid: 3,
          },
          {
            title: 'הערות - הארות',
            index: 11,
            grid: 3,
          },
          {
            title: 'שביעות רצון מהליוי המקצועי',
            index: 12,
            grid: 3,
          },
          {
            title: 'חיבור למוביל',
            index: 13,
            grid: 3,
          },
          {
            title: 'באיזו רמה מרגיש נוח לפנות למוביל',
            index: 14,
            grid: 3,
          },
        ],
      },
    ],
  };

module.exports = config;