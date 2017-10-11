
import React from 'react';
import {Modal, Popover, Tooltip, Button, OverlayTrigger, bsStyle} from 'react-bootstrap';
// import {Modal} from 'react-modal-bootstrap'
// import react-modal from 'react-modal'

export default class AuthModal extends React.Component {
  
    // constructor() {
    //   super();
    //   this.render.bind(this);
    //   this.state = { showModal: false }
    // }
  state = {
    showModal: false
  }
    close = () => {
      this.setState({ showModal: false });
    }
  
    open = () =>  {
      this.setState({ 
        showModal: true
      });
    }
  
    // handleSelect(eventKey) {
    //   event.preventDefault();
    //   alert(`selected ${eventKey}`);
    // }
  
    render () {
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = (
        <Tooltip id="modal-tooltip">
          wow.
        </Tooltip>
      );
  
      return (
        <div>
          <Button
            bsStyle="primary"
            bsSize="small"
            onClick={this.open}
          >
            Login
          </Button>
  
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  
          </Modal>
        </div>
      );
    }
  }