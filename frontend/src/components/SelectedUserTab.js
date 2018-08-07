import React from 'react';

import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const SelectedUserTab = ({ item }) => (
  <Grid container spacing={24}>
    <Grid item xs={12}>
      <Typography variant="headline" component="h1">{item.title}</Typography>
    </Grid>

    {item.sections.reverse().map(section => (
      <Grid item key={section.title.value}>
        <Card>
          <CardContent>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <Typography color="textSecondary">{section.title.value}</Typography>
              </Grid>
              {
                section.fields.map(field => field.value && (
                  <Grid item xs={12} md={field.grid} key={field.index}>
                    <Typography style={{ marginBottom: 16 }}>
                      <strong>{field.title}:</strong> {field.value}
                    </Typography>
                  </Grid>
                ))
              }
            </Grid>

          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>);

export default SelectedUserTab;
