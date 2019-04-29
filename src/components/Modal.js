import React from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import Button from './Button';
// CSS
import './Modal.sass';

const Modal = React.forwardRef((props, ref) => {
  const {
    show,
    render,
    newState,
  } = props;

  // const [show, setShow] = useState(false);
  const closeModal = () => {
    newState(false);
  };

  const classname = !show ? 'hide' : 'show';
  return (
    <div className={`modal ${classname}`} ref={ref}>
      <div className="modal__header">
        <Button value="Close" handleClick={closeModal} />
      </div>
      <div className="modal__content">
        {render}
      </div>
    </div>
  );
});

Modal.defaultProps = {
  render: <div>modal dialog</div>,
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  render: PropTypes.element,
  newState: PropTypes.func.isRequired,
};

export default Modal;
