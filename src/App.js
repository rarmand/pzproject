import React from "react";
import "./App.css";
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
    letterSpacing: "6px",
    textAlign: "center"
  },
  subtitle: {
    color: "#bbbcc0",
    fontSize: "14px",
    margin: "10px 0",
    textAlign: "center"
  },
  loginForms: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textfield: {
    width: "100%",
    maxWidth: "340px"
  },
  additionalForms: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "340px",
    margin: "10px 0 30px 0"
  },
  checkbox: {
    display: "flex",
    flex: 1,
    fontSize: "0.875rem"
  },
  linkButton: { textDecoration: "none", textTransform: "capitalize" },
  submitButtons: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "350px"
  },
  button: {
    flex: 1,
    minWidth: "155px",
    textTransform: "capitalize",
    fontWeight: "normal",
    boxShadow: "none",
    margin: "5px"
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    fontSize: "10px"
  }
}));

function App() {
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
                Welcome back! Please login to your account.
              </Typography>
            </div>
            <ThemeProvider theme={theme}>
              <div>
                <form className={classes.loginForms}>
                  <TextField
                    className={classes.textfield}
                    margin="normal"
                    label={<Typography color="primary">Username</Typography>}
                    id="username"
                    name="username"
                  />
                  <TextField
                    className={classes.textfield}
                    margin="normal"
                    name="password"
                    label={<Typography color="primary">Password</Typography>}
                    type="password"
                    id="password"
                  />

                  <div className={classes.additionalForms}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Typography className={classes.checkbox}>
                          Remember me
                        </Typography>
                      }
                      color="primary"
                      className={classes.checkbox}
                    />
                    <Link color="primary" className={classes.linkButton}>
                      Forgot password
                    </Link>
                  </div>

                  <div className={classes.submitButtons}>
                    <Button
                      color={"primary"}
                      variant={"contained"}
                      className={classes.button}
                    >
                      Login
                    </Button>
                    <Button
                      color="primary"
                      variant={"outlined"}
                      className={classes.button}
                    >
                      Sign up
                    </Button>
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

export default App;
