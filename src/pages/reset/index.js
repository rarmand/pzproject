import React from "react";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Logo from "../../components/logo";
import LoginFooter from "../../components/loginFooter";
import LoginInput from "../../components/loginInput";
import LoginButton from "../../components/loginButton";

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
    // width: "100%",
    // maxWidth: "410px",
    margin: "40px 0"
  }
});

class Reset extends React.Component {
  render() {
    const { classes } = this.props;

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
                    <LoginInput label={"email"} name={"Email"} type={"email"} />

                    <div className={classes.submitButtons}>
                      <LoginButton
                        variant={"contained"}
                        title={"Send request"}
                      />
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

export default withStyles(useStyles)(Reset);
