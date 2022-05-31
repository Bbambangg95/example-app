import React from 'react';
import ReactModal from 'react-modal';

class ModalEx extends React.Component {
    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      } 
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }

      render () {
        return (
          <ReactModal>
            <ReactModal 
               isOpen={this.state.showModal}
               contentLabel="Minimal Modal Example"
            >
              <button onClick={this.handleCloseModal}>Close Modal</button>
            </ReactModal>
          </ReactModal>
        );
      }
    
    
}

export default ModalEx;