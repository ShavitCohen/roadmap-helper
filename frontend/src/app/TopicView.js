import React from 'react';

import { Grid, Card, CardContent, Typography, AppBar, Toolbar } from '@material-ui/core';

const TopicView = ({ topicData, topic, employee }) => (
  <Grid container spacing={24}>
    <Grid topic xs={12}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container justify={'space-between'}>
            <Grid item>
              <Typography variant="headline" component="h2">{topic.title}</Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subheading" component="h6"
              >{employee.name}</Typography>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
    <Grid item xs={12}>
      {topicData.reverse().map(section => (
        <Grid item key={section.sectionTitle}>
          <Card>
            <CardContent>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Typography color="textSecondary">{section.sectionTitle}</Typography>
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
          <hr />
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default TopicView;
