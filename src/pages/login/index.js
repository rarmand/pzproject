import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Link from "@material-ui/core/Link";

import LoginInput from "../../components/loginInput";
import LoginButton from "../../components/loginButton";
import LoginCheckbox from "../../components/loginCheckbox";

const useStyles = theme => ({
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
  linkButton: {
    textDecoration: "none",
    textTransform: "capitalize"
  },
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
      <div>
        <form className={classes.loginForms}>
          <LoginInput label={"username"} name={"Username"} />
          <LoginInput label={"password"} name={"Password"} type={"password"} />

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
    );
  }
}

export default withStyles(useStyles)(Login);
