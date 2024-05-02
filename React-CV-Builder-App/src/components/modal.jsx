import "../styles/modal.css";

const Modal = ({ isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>A small note</h2>
        <p>
          The save button doesn't work correctly as the library used to export
          the image needs tweaking to make use of flex and grid alignment
          correctly. You can instead screenshot the CV to save it.
        </p>
        <button onClick={close} id="close_button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
