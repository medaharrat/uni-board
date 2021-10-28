import React from 'react'
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Lock from '@material-ui/icons/Lock';
import Mail from '@material-ui/icons/Mail';
import {createTheme} from  '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const theme = createTheme({
    
    palette:{
      primary:{main: '#F5B62A'},
      secondary:{main:'#383938'},
    },
    typography: {
        fontFamily: ['"Poppins"', 'Open Sans'].join(',')
       }
  });
 

export const Login = ({}) => {


      
      const classes = useStyles();
    return  (
     <MuiThemeProvider theme={theme}>
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
      <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
      >   
        <Grid item xs={9}>
            
        </Grid>
      </Grid>
        
        <Typography component="div">
          <Box fontSize={30} fontWeight={600} m={-2}>
              UNI-BOARD
          </Box>
        </Typography>
        <Typography component="div">
          <Box fontSize={16} m={1} paddingT>
            Sign into your account
          </Box>
        </Typography>
        <form className={classes.form} noValidate>
          <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
          >
            <Grid item xs={9}>
              <TextField
                className={classes.inputF}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Neptun Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Mail color="disabled"/></InputAdornment>,
                }}
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
              />
            </Grid>

            <Grid item xs={9}>
              <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              />
            </Grid>
            <Grid item xs={9}>  
            <FormControl component="fieldset">
  <FormLabel component="legend">You are :</FormLabel>
  <RadioGroup
    aria-label="gender"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="instructor" control={<Radio />} label="Instructor" />
    <FormControlLabel value="student" control={<Radio />} label="Student" />
   
  </RadioGroup>
</FormControl>
            </Grid>

            <Grid item xs={9} >
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              m={0}
              >sign In
                <Link href="/Dashboard" />
                
      
              </Button>
            </Grid>

            <Grid item>
              <Link href="#" variant="body2" color="secondary" >
                Forgot your password?
              </Link>
            </Grid>

           

          </Grid>

          
        </form>
      </div>
    </Container>
    </MuiThemeProvider>
  );
}
export default Login;