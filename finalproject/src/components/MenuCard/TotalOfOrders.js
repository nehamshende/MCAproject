import React, { Component } from "react";
import { Card, Button } from "@material-ui/core";
import history from "../../history";

export class TotalOfOrders extends Component {
  handleChange = () => {
    history.push("/orders");
  };
  render() {
    return (
      <div>
        <Card style={{ margin: "20px", width: "80%", height: "70px" }}>
          <p>{"  "}</p>
          <p>Total : &#8377; 390</p>
        </Card>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.handleChange}
        >
          My Orders
        </Button>
      </div>
    );
  }
}

export default TotalOfOrders;
