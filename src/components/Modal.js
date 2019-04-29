import React from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import Button from './Button';
// CSS
import './Modal.sass';

function Modal(props) {
  const {
    show,
    render,
    newShowState,
    position,
  } = props;

  const closeModal = () => {
    newShowState(false);
  };

  const classname = !show ? 'hide' : 'show';
  return (
    <div className={`modal ${classname}`}>
      <div className={`modal__container ${position}`}>
        <div className="modal__header">
          <Button value="Close" handleClick={closeModal} />
        </div>
        <div className="modal__content">
          {render}
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  render: <div>modal dialog</div>,
  position: 'center',
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  render: PropTypes.element,
  newShowState: PropTypes.func.isRequired,
  position: PropTypes.string,
};

export default Modal;
