import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="blocker" onClick={onClose} data-testid="modal-blocker">
      <div
        className={`modal ${isOpen ? "modal-open" : ""}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-children">
          {children}
          <button onClick={onClose} className="close-modal">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
