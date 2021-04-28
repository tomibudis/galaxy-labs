import React from 'react';
import PropTypes from 'prop-types';

const Modal = () => <div>Modal Components</div>;

Modal.defaultProps = {
  isVisible: false,
};

Modal.propTypes = {
  /** show hide the modal */
  isVisible: PropTypes.bool,
};

export default Modal;
