import { createPortal } from "react-dom";
import "./Modal.css";
import { memo } from "react";

type ModalProps = {
  isActive: boolean;
  isDeleteLoading: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
};

const Modal = memo(({ isActive, isDeleteLoading, onCloseModal, children }: ModalProps) => {
  const modalElement = document.getElementById("modal");
  if (modalElement === null) {
    return null;
  }
  return createPortal(
    isActive && (
      <div className={isDeleteLoading ? "modal modal--disabled" : "modal"} onClick={onCloseModal}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    ),
    modalElement
  );
});

export default Modal;
