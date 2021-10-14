import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:300,
    marginTop:100
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#3f51b5',
 
    width:800,
    marginLeft:100
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#009688',
    
  },
  name: {
    color: 'white',
    fontSize: 15,
  },
  link:{
    textDecoration:"none"
  }
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
          <Link to="/easy" className={classes.link}><Paper className={classes.paper1}>
            <Typography className={classes.name}>Easy</Typography>
          </Paper></Link>
        </Grid>{' '}
        <Grid item xs={3}>
        <Link to="/medium" className={classes.link}> <Paper className={classes.paper1}>
            <Typography className={classes.name}>Medium</Typography>
          </Paper></Link>
        </Grid>{' '}
        <Grid item xs={3}>
        <Link to="/difficult" className={classes.link}> <Paper className={classes.paper1}>
            <Typography className={classes.name}>Hard</Typography>
          </Paper></Link>
        </Grid>
      </Grid>
    </div>
  );
}
