import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// COMPONENTS
import Button from './Button';
// CSS
import './Modal.sass';

function Modal(props) {
  const {
    modal,
    hideModal,
    // show,
    render,
    // newShowState,
    position,
  } = props;

  const closeModal = () => {
    // newShowState(false);
    hideModal('all', false);
  };

  // const classname = !show ? 'hide' : 'show';
  const classname = !modal.status ? 'hide' : 'show';
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
  modal: PropTypes.shape({
    type: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
  hideModal: PropTypes.func.isRequired,
  // show: PropTypes.bool.isRequired,
  render: PropTypes.element,
  // newShowState: PropTypes.func.isRequired,
  position: PropTypes.string,
};

const mapStateToProps = ({ modal }) => ({
  modal,
});

export default connect(mapStateToProps, actions)(Modal);
