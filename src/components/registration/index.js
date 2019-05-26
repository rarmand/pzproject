import React from "react";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Link from "@material-ui/core/Link";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#43425d" },
    secondary: { main: "#bbbcc0" }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh"
  },
  image: {
    backgroundColor: "#43425d"
  },
  fill: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "24px"
  },
  paper: {
    color: "#43425d",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  titles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "8px",
    textAlign: "center",
    fontSize: "32px"
  },
  subtitle: {
    color: "#bbbcc0",
    fontSize: "16px",
    margin: "10px 0",
    textAlign: "center"
  },
  loginForms: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  input: {
    fontSize: 14
  },
  twoforms: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "5px",
    width: "100%",
    maxWidth: "400px"
  },
  textfield: {
    width: "100%",
    maxWidth: "400px",
    margin: "5px"
  },
  additionalForms: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "400px",
    margin: "30px 0"
  },
  checkbox: {
    display: "flex",
    flex: 1,
    fontSize: "0.875rem"
  },
  submitButtons: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "410px"
  },
  button: {
    flex: 1,
    minWidth: "155px",
    textTransform: "capitalize",
    fontWeight: "normal",
    boxShadow: "none",
    margin: "5px 5px 30px 5px"
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    fontSize: "10px"
  }
}));

function Registration() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="row">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} elevation={6} square>
        <div className={classes.paper}>
          <div className={classes.fill}>
            <div className={classes.titles}>
              <Typography component="h1" variant="h5" className={classes.title}>
                Donut Monitoring
              </Typography>
              <Typography className={classes.subtitle}>
                Please complete to create your account.
              </Typography>
            </div>
            <ThemeProvider theme={theme}>
              <div>
                <form className={classes.loginForms}>
                  <div className={classes.twoforms}>
                    <TextField
                      margin="normal"
                      label={
                        <Typography className={classes.input} color="primary">
                          First name
                        </Typography>
                      }
                      id="firstname"
                      name="firstname"
                      style={{ borderColor: "green" }}
                    />
                    <TextField
                      margin="normal"
                      name="lastname"
                      label={
                        <Typography className={classes.input} color="primary">
                          Last name
                        </Typography>
                      }
                      id="lastname"
                    />
                  </div>
                  <TextField
                    className={classes.textfield}
                    margin="normal"
                    label={
                      <Typography className={classes.input} color="primary">
                        Username
                      </Typography>
                    }
                    id="username"
                    name="username"
                  />
                  <TextField
                    className={classes.textfield}
                    margin="normal"
                    label={
                      <Typography className={classes.input} color="primary">
                        Email
                      </Typography>
                    }
                    id="email"
                    name="email"
                  />
                  <TextField
                    className={classes.textfield}
                    margin="normal"
                    label={
                      <Typography className={classes.input} color="primary">
                        Password
                      </Typography>
                    }
                    id="password"
                    name="password"
                    type="password"
                  />
                  <TextField
                    className={classes.textfield}
                    margin="normal"
                    label={
                      <Typography className={classes.input} color="primary">
                        Confirm password
                      </Typography>
                    }
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                  />

                  <div className={classes.additionalForms}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Typography className={classes.checkbox}>
                          I agree with terms and conditions
                        </Typography>
                      }
                      color="primary"
                      className={classes.checkbox}
                    />
                  </div>

                  <div className={classes.submitButtons}>
                    <Button
                      color="primary"
                      variant={"contained"}
                      className={classes.button}
                    >
                      Sign up
                    </Button>
                    <Link>Already have an account? Sign in.</Link>
                  </div>
                </form>
              </div>
            </ThemeProvider>
          </div>
          <footer className={classes.footer}>
            <p>Terms of use. Privacy policy.</p>
          </footer>
        </div>
      </Grid>
    </Grid>
  );
}

export default Registration;
