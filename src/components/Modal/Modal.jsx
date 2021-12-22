import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';

const Modal = ({ isVisible }) => {
  const popUpTransitions = useTransition(isVisible, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(40px)', display: 'block' },
    leave: { opacity: 0, transform: 'translateY(20px)' },
  });

  const backupTransitions = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 0.4 },
    leave: { opacity: 0 },
  });

  return (
    <Fragment>
      {backupTransitions(
        (propsStyle, item, key) =>
          item && (
            <animated.div
              style={propsStyle}
              className="modal-backdrop"
              key={key}
            />
          )
      )}
      {popUpTransitions(
        (propsStyle, item, key) =>
          item && (
            <div key={key}>
              <animated.div
                style={propsStyle}
                className="modal show"
                tabIndex="-1"
              >
                <div className="modal-dialog">
                  <div className="modal-content shadow-sm">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <span>X</span>
                    </div>
                    <div className="modal-body">
                      <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </animated.div>
            </div>
          )
      )}
    </Fragment>
  );
};

Modal.defaultProps = {
  isVisible: false,
};

Modal.propTypes = {
  /** show hide the modal */
  isVisible: PropTypes.bool.isRequired,
  /** func to close the modal */
  onClose: PropTypes.func.isRequired,
};

export default Modal;
