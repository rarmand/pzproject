import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = theme => ({
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
  }
});

class Logo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.titles}>
        <Typography component="h1" variant="h5" className={classes.title}>
          Donut Monitoring
        </Typography>
        <Typography className={classes.subtitle}>
          {this.props.subtitle}
        </Typography>
      </div>
    );
  }
}

export default withStyles(useStyles)(Logo);
