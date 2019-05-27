import React from "react";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Logo from "../../components/logo";
import LoginFooter from "../../components/loginFooter";
import LoginBackground from "../../components/loginBackground";
import Registration from "../registration";
import Login from "../login";
import Reset from "../reset";

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
  paper: {
    color: "#43425d",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  fill: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "24px"
  }
});

class Main extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.root} container direction="row">
        <CssBaseline />
        <LoginBackground />
        <Grid item xs={12} sm={8} md={6} elevation={6} square>
          <div className={classes.paper}>
            <div className={classes.fill}>
              <Logo subtitle="Welcome back! Please login to your account." />
              <ThemeProvider theme={theme}>
                <Login />
              </ThemeProvider>
            </div>
            <LoginFooter />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Main);
