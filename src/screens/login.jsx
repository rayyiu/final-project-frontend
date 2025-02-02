import React from "react";
import { useState, useContext } from 'react';
import { authContext } from '../AuthProvider';
import { CssBaseline, Paper, TextField, Button, makeStyles, Grid, Typography, Card, CardActions, CardMedia } from '@material-ui/core';
import "../App.css"
const useStyles = makeStyles((theme) => ({
  container: {
  // marginTop: theme.spacing(35),
  //  height: "100%",
   overflow: 'hidden',
   height: '100vh',
   cardGrid: {
    padding: '20px 0',
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  cardContent: {
    flexGrow: 1
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
    flexGrow: 10,
  },
  paperContainer:{
    height: `100vh`,
    backgroundImage: `url(https://scontent.fyvr1-1.fna.fbcdn.net/v/t1.15752-9/175096321_164067965601096_8611238032525775896_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=W55_8YwHjK4AX8KHyKR&_nc_ht=scontent.fyvr1-1.fna&oh=f9f7e99da3812e5c3d667f5b0b242cc1&oe=60A2BAD4)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },

  },
  submit: {
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#56144D",
    }
    },


}));

export default function Login({setNavbar}) {
  const classes = useStyles();
  const [email, setEmail] = useState("jesse@jesse.com");
  const [password, setPassword] = useState("jesse");
  const { loginUser } = useContext(authContext); // the login method

  // updating input fields
  const onEmailChange = function (event) {
    setEmail(event.target.value);
  };

  // updating input fields
  const onPasswordChange = function (event) {
    setPassword(event.target.value);
  };

  // if email exists, login with the provided email and password
  const onSubmit = function (event) {
    event.preventDefault();
    if (email && password) {
      loginUser(email, password);
    }
    
  };

  return (
    <div className={classes.container} maxWidth="xs">
    <CssBaseline>
      <Paper
      style={{
        height: `100vh`,
        width:`100%`,
        background: `url(https://i.imgur.com/dj04uE0.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      className={classes.paperContainer}
      >
      <Grid
      container
      spacing={5}
      justify={'center'}
      alignSelf={'center'}
      alignItems={'center'}
      direction={'row'}
      alignContent={'stretch'}
      >   
      <div               
      style={{marginTop:'4vh'}}>
              <Grid
              item
              >
              <Card className={classes.card}>
          </Card>
              </Grid>

      <form validate onSubmit={onSubmit}
      className={classes.form}
      >           
              <Grid 
              container
              direction={'column'}
              alignContent={'space-between'}  
              spacing={2}
              >
            <Grid item
            >
            <Typography
              class="login"
              variant={'h3'}
              align='center'
              color={'primary'}
              >
                 Login
              </Typography>
            </Grid>
            <Grid
            item
            >  
            <TextField 
            id="emailInput"
            variant={"filled"}
            required={"true"}
            label={"Email Address"}
            value={email}
            onChange={onEmailChange}
            placeholder={"email"}
            autofocus={"true"}
            ></TextField>
            </Grid>
          <Grid
          item
          >
          <TextField 
            id="passwordInput"
            variant={"filled"}
            required={"true"}
            name={"password"}
            type={"password"}
            label={"Password"}
            value={password}
            onChange={onPasswordChange}
            placeholder={"password"}
            autofocus={"true"}
            ></TextField>
          </Grid>
        <Grid
        item
        >
          <Button 
          className={classes.submit}
          color="primary"
          variant={"contained"}
          fullWidth type="submit"
          > 
        Submit 
          </Button>
          
          </Grid>
    
        
      </Grid>
      </form>
      </div>
        </Grid>
    </Paper>
    </CssBaseline>
    </div>
  );
}
