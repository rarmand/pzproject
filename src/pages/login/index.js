import React from "react";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Link from "@material-ui/core/Link";

import Logo from "../../components/logo";
import LoginFooter from "../../components/loginFooter";
import LoginInput from "../../components/loginInput";
import LoginButton from "../../components/loginButton";
import LoginCheckbox from "../../components/loginCheckbox";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#43425d" },
    secondary: { main: "#bbbcc0" }
  }
});

const useStyles = theme => ({
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
  loginForms: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
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
  linkButton: { textDecoration: "none", textTransform: "capitalize" },
  submitButtons: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "410px"
  }
});

class Login extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.root} container direction="row">
        <CssBaseline />
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
        <Grid item xs={12} sm={8} md={6} elevation={6} square>
          <div className={classes.paper}>
            <div className={classes.fill}>
              <Logo subtitle="Welcome back! Please login to your account." />
              <ThemeProvider theme={theme}>
                <div>
                  <form className={classes.loginForms}>
                    <LoginInput label={"username"} name={"Username"} />
                    <LoginInput
                      label={"password"}
                      name={"Password"}
                      type={"password"}
                    />

                    <div className={classes.additionalForms}>
                      <LoginCheckbox text={"Remember me"} />
                      <Link color="primary" className={classes.linkButton}>
                        Forgot password
                      </Link>
                    </div>

                    <div className={classes.submitButtons}>
                      <LoginButton variant={"contained"} title={"Login"} />
                      <LoginButton variant={"outlined"} title={"Sign up"} />
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
}

export default withStyles(useStyles)(Login);
