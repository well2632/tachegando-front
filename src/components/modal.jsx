import React, { useEffect } from "react";
import Close from "./icons/close";

function Modal({ children, close }) {
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };

    document.addEventListener("keydown", keyDownHandler);
  }, []);
  return (
    <div className="modal__background" onClick={close}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        {children}
        <Close className="modal__close-btn" fill="" onClick={close} />
      </div>
    </div>
  );
}

export default Modal;
