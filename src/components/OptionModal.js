import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selecteOption}
        contentLabel='Selected Option'
        closeTimeoutMS={200}
        className="modal"
        onRequestClose={props.handleClearSelectedOption}>
        <h3 className="modal__title">Selected Option</h3>
        {props.selecteOption && <p className="modal__body">{props.selecteOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>X</button>
    </Modal>
);

export default OptionModal;