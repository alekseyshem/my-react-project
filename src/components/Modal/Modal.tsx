import { createPortal } from "react-dom";
import "./Modal.css";
import { memo } from "react";
import classNames from "classnames";

type ModalProps = {
  isActive: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
};

const Modal = memo(({ isActive, onCloseModal, children }: ModalProps) => {
  const modalElement = document.getElementById("modal");
  if (modalElement === null) {
    return null;
  }
  return createPortal(
    isActive && (
      <div className={classNames("modal")} onClick={onCloseModal}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    ),
    modalElement
  );
});

export default Modal;
