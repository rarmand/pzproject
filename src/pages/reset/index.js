import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import LoginInput from "../../components/loginInput";
import LoginButton from "../../components/loginButton";

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
  linkButton: { textDecoration: "none", textTransform: "capitalize" },
  submitButtons: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "410px",
    margin: "40px 0"
  }
});

class Reset extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.loginForms}>
          <LoginInput label={"email"} name={"Email"} type={"email"} />

          <div className={classes.submitButtons}>
            <LoginButton variant={"contained"} title={"Send request"} />
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(Reset);
