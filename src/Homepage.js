import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#3f51b5',
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#009688',
  },
  name: {
    color: 'white',
    fontSize: 20,
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.name}>
              Choose the Categeory
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper1}>
            <Typography className={classes.name}>Easy</Typography>
          </Paper>
        </Grid>{' '}
        <Grid item xs={3}>
          <Paper className={classes.paper1}>
            <Typography className={classes.name}>Medium</Typography>
          </Paper>
        </Grid>{' '}
        <Grid item xs={3}>
          <Paper className={classes.paper1}>
            <Typography className={classes.name}>Hard</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
