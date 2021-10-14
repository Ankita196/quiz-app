import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:300,
    marginTop:100,
    
   
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
    textAlign: 'left',
    color: theme.palette.text.secondary,
    backgroundColor: '#e0f2f1',
    width:400,
    marginLeft:350
    
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#e0f2f1',
width:800,
marginLeft:100
    
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
          <Paper className={classes.paper2}>
            <Typography>
              Answer with clicking on box
            </Typography>
          </Paper>
        </Grid>
       <br/>
        {data.map(item=>(
          <>
           <Grid container spacing={3}>
              <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography className={classes.name}>
                 {item.question}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
             <Paper className={classes.paper1}>
                <Typography><Checkbox/>{item.correct_answer}</Typography>
              </Paper>
            </Grid>{' '}
            <Grid item xs={12}>
           <Paper className={classes.paper1}>
                <Typography ><Checkbox/>{item.incorrect_answers[0]}</Typography>
              </Paper>
            </Grid>{' '}
            <Grid item xs={12}>
            <Paper className={classes.paper1}>
                <Typography ><Checkbox/>{item.incorrect_answers[1]}</Typography>
              </Paper><br/>
              <Grid item xs={12}>
              <Paper className={classes.paper1}>
                <Typography ><Checkbox/>{item.incorrect_answers[2]}</Typography>
              </Paper>
            </Grid></Grid>
            </Grid>
            <br/> <br/>
            </>
            ))}
        
        
    </div>
  );
}
