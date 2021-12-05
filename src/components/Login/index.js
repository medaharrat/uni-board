import React, { useState } from 'react'
import { useStyles } from './styles';
import { loginUser, useAuthState, useAuthDispatch } from '../../context';
import { 
  Button, TextField, InputAdornment, FormControl,
  Grid, Container, LinearProgress 
 } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useRouter } from 'next/router';
import { Lock, Fingerprint } from '@material-ui/icons';

const Login = () => {
  const classes = useStyles();
  const router = useRouter();
  const [alert, setAlert] = useState({title: '', type: 'warning'});
  const [progress, setProgress] = useState('determinate');
  const [values, setValues] = useState({
    neptun: '',
    password: '',
  });

  const dispatch = useAuthDispatch()
  const { loading, error } = useAuthState();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try { 
      // login action makes the request and handles all the neccessary state changes
      setProgress('indeterminate')
      setTimeout(
        () => {
          loginUser(dispatch, values)
          .then((res) => {
            if (!res) {
              setAlert({...alert, title: "Invalid username or password."})
              setProgress('determinate')
            }
            else {
              console.log(`> Welcome ${res}`)
              router.push('/')
              setTimeout(
                () => {
                  setProgress('determinate')
                }, 1000
              )
            }
          })
        }, 2000
      )
      } catch (error) {
        console.log(`Login error: ${error}`);
    }
  };

  return  (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
      <LinearProgress variant={progress} className={classes.progress} />
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        
        <Grid item xs={9}>
            <img className={classes.logo} src="./uniboard.png" />
        </Grid>

        <Grid item xs={9}>
          <TextField
            className={classes.inputF}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="neptun"
            label="Neptun ID"
            name="neptun"
            autoComplete="neptun"
            autoFocus
            InputProps={{
              startAdornment: <InputAdornment position="start"><Fingerprint color="disabled"/></InputAdornment>,
            }}
            onChange={handleChange('neptun')}
          />
        </Grid>
        <Grid item xs={9}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              startAdornment: <InputAdornment position="start"><Lock color="disabled" /></InputAdornment>,
            }}
            onChange={handleChange('password')}
          />
        </Grid>
        <Grid item xs={9}>  
          <FormControl component="fieldset"/>
        </Grid>
        <Grid item xs={9} >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            m={0}
            disableRipple
            disableElevation
            disabled={progress == 'indeterminate'}
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Grid>
      </Grid>  
      </div>
      {/* Alerts */}
        {alert.title && (
          <div className={classes.alert}>
            <Alert
              variant="outlined"
              severity={alert.type}
            >
                { alert.title }
            </Alert>    
          </div>          
        )}
    </Container>
  );
}

export default Login;