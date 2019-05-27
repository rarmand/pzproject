import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const useStyles = theme => ({
  button: {
    flex: 1,
    minWidth: "155px",
    textTransform: "capitalize",
    fontWeight: "normal",
    boxShadow: "none",
    margin: "5px 5px 30px 5px"
  }
});

class LoginButton extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button
        color={"primary"}
        variant={this.props.variant}
        className={classes.button}
      >
        {this.props.title}
      </Button>
    );
  }
}

export default withStyles(useStyles)(LoginButton);
