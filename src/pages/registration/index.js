import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Link from "@material-ui/core/Link";

import LoginButton from "../../components/loginButton";
import LoginInput from "../../components/loginInput";
import LoginCheckbox from "../../components/loginCheckbox";

const useStyles = theme => ({
  loginForms: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  twoforms: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "410px"
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
  submitButtons: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "410px"
  }
});

class Registration extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.loginForms}>
          <div className={classes.twoforms}>
            <LoginInput label={"firstname"} name={"First name"} />
            <LoginInput label={"lastname"} name={"Last name"} />
          </div>

          <LoginInput label={"username"} name="Username" />
          <LoginInput label={"email"} name="Email" type={"email"} />
          <LoginInput label={"password"} name="Password" type={"password"} />
          <LoginInput
            label={"confirmpassword"}
            name="Confirm password"
            type={"password"}
          />

          <div className={classes.additionalForms}>
            <LoginCheckbox text={"I agree with terms and conditions"} />
          </div>

          <div className={classes.submitButtons}>
            <LoginButton variant={"contained"} title={"Sign up"} />
            <Link>Already have an account? Sign in.</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(Registration);
