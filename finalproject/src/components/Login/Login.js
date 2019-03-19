import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    display: "flex",
    flexDirection: "column"
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

export class Login extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      username: "",
      password: ""
    };
    this.state = this.initialState;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    this.props.history.push("/home");
  };

  render() {
    const { classes, userName } = this.props;
    if (!userName) {
      return (
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            Log In
          </Typography>
          <Divider />
          <TextField
            id="username1"
            label="User Name"
            placeholder="Enter user name"
            className={classes.textField}
            margin="normal"
            name="username"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            id="password1"
            label="Password"
            className={classes.textField}
            onChange={this.handleChange}
            type="password"
            name="password"
            autoComplete="current-password"
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
            className={classes.button}
          >
            Log In
          </Button>
          <Link to="/signup">Sign up</Link>
        </Paper>
      );
    } else {
      this.props.history.push("/home");
      return null;
    }
  }
}
export default withStyles(styles)(Login);
