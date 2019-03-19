import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import React, { Component } from "react";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    display: "flex",
    flexDirection: "column",
    width: "86%"
  },
  button: {
    margin: theme.spacing.unit
  },
  grow: {
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  render() {
    const { classes } = this.props;
    if (this.props.signUpRequested) {
      return <div>loading</div>;
    }
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Sign up
        </Typography>
        <Divider />
        <TextField
          id="username1"
          label="User Name"
          placeholder="Enter user name"
          className={classes.textField}
          margin="normal"
          fullWidth
          value={this.state.username}
          onChange={e => {
            this.setState({
              username: e.target.value
            });
          }}
        />
        <TextField
          id="email1"
          onChange={e => {
            this.setState({
              email: e.target.value
            });
          }}
          label="Email"
          placeholder="Enter Email"
          value={this.state.email}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="password1"
          label="Password"
          className={classes.textField}
          type="password"
          value={this.state.password}
          autoComplete="current-password"
          margin="normal"
          onChange={e => {
            this.setState({
              password: e.target.value
            });
          }}
        />
        <TextField
          id="confirmPassword1"
          label="Confirm Password"
          className={classes.textField}
          type="password"
          margin="normal"
        />
        <Button
          onClick={() => {
            this.props.signup(this.state);
            document.getElementById("confirmPassword1").value = "";

            this.setState({
              username: "",
              password: "",
              email: ""
            });
          }}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Sign Up
        </Button>
        <Link to="/login">Log In</Link>
      </Paper>
    );
  }
}

export default withStyles(styles)(SignUp);
