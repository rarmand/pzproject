import React from "react";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Logo from "../../components/logo";
import LoginFooter from "../../components/loginFooter";
import LoginInput from "../../components/loginInput";

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
  linkButton: { textDecoration: "none", textTransform: "capitalize" },
  submitButtons: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    // width: "100%",
    // maxWidth: "410px",
    margin: "40px 0"
  },
  button: {
    flex: 1,
    minWidth: "180px",
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

function Reset() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="row">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} elevation={6} square>
        <div className={classes.paper}>
          <div className={classes.fill}>
            <Logo
              subtitle={
                "Enter your email and we send you a password reset link."
              }
            />
            <ThemeProvider theme={theme}>
              <div>
                <form className={classes.loginForms}>
                  {/*<TextField*/}
                  {/*  className={classes.textfield}*/}
                  {/*  margin="normal"*/}
                  {/*  label={*/}
                  {/*    <Typography className={classes.input} color="primary">*/}
                  {/*      Email*/}
                  {/*    </Typography>*/}
                  {/*  }*/}
                  {/*  id="email"*/}
                  {/*  name="email"*/}
                  {/*/>*/}
                  <LoginInput label={"email"} />

                  <div className={classes.submitButtons}>
                    <Button
                      color={"primary"}
                      variant={"contained"}
                      className={classes.button}
                    >
                      Send request
                    </Button>
                  </div>
                </form>
              </div>
            </ThemeProvider>
          </div>
          <LoginFooter />
        </div>
      </Grid>
    </Grid>
  );
}

export default Reset;
