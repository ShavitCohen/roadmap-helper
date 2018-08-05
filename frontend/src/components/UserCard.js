import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const UserCard = ({ item }) => (
  <Card style={{ marginBottom: 16 }}>
    <CardContent>
      <Typography variant="headline" component="h1">{item.title}</Typography>
      {item.sections.map(section => (
        <div key={section.title.value}>
          <Typography color="textSecondary">{section.title.value}</Typography>
          {section.fields.map(field => {
            if (!field.value) return;
            return (
              <Typography style={{ marginBottom: 16 }} key={field.index}>
                {field.title}: {field.value}
              </Typography>
            )
          })}
        </div>
      ))}
    </CardContent>
  </Card>
);

export default UserCard;
