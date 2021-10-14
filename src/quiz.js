import React,{useEffect, useState} from 'react';
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
}));

export default function Quiz() {
  const classes = useStyles();
  const [data, setQuiz] = useState([]);
  const getQuizData = async () => {
    try {
      const res = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium');
      const actualData = await res.json();
      console.log(actualData.results);
      setQuiz(actualData.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuizData();
  }, []);

  return (
    <div className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.name}>
              Answer with clicking on box
            </Typography>
          </Paper>
        </Grid>
       
        {data.map(item=>{
          <>
           <Grid item xs={12}>
           <Paper className={classes.paper}>
             <Typography className={classes.name}>
              {item.quetion}
             </Typography>
           </Paper>
         </Grid>
         <Grid item xs={3}>
          <Paper className={classes.paper1}>
             <Typography className={classes.name}>{item.correct_answer}</Typography>
           </Paper>
         </Grid>{' '}
         <Grid item xs={3}>
        <Paper className={classes.paper1}>
             <Typography className={classes.name}>{item.incorrect_answers[0]}</Typography>
           </Paper>
         </Grid>{' '}
         <Grid item xs={3}>
         <Paper className={classes.paper1}>
             <Typography className={classes.name}>{item.incorrect_answers[1]}</Typography>
           </Paper>
           <Paper className={classes.paper1}>
             <Typography className={classes.name}>{item.incorrect_answers[2]}</Typography>
           </Paper>
         </Grid>
     
       </>
        })}
        
    </div>
  );
}
