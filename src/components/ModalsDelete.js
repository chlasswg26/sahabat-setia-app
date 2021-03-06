import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../styles/Description.css";

class ModalsDelete extends Component {
  state = {
    show: false,
  };
  handleClose = () =>
    this.setState({
      show: false,
    });
  handleShow = () =>
    this.setState({
      show: true,
    });

  home = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <div onClick={this.handleShow} className="delete">
          Delete
        </div>

        <Modal show={this.state.show} onHide={this.handleClose} size="sm">
          <Modal.Header closeButton>
            <Form>
              <p>Are you sure want to delete this data?</p>
              <Button
                variant="primary"
                type="button"
                onClick={() => {
                  this.props.delete();
                  this.handleClose();
                  this.home();
                }}
                style={{ marginLeft: "130px" }}
              >
                Yes
              </Button>{" "}
              <Button
                variant="secondary"
                type="button"
                onClick={this.handleClose}
              >
                No
              </Button>
            </Form>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}
export default ModalsDelete;
