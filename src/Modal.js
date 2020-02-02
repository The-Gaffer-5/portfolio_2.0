import React, { Component } from 'react';

class Modal extends Component {
    render() {
        if(this.props.modalOpen !== '') {
            return (
                <div className="modal-wrapper">
                    <div className="modal-content">
                        <div className="modal-x" onClick={this.props.closeTheModal}>X</div>
                        <div className="modal-name">{this.props.name}</div>
                        <div className="modal-description">{this.props.description}</div>
                        <div className="modal-tools">{this.props.tools}</div>
                        <a className="modal-link" href={this.props.url} target="_blank">Click to visit</a>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Modal;