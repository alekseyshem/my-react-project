import { useDispatch, useSelector } from "react-redux";
import {
  makeSelectDeletePostId,
  makeSelectIsDeleteLoading,
  makeSelectIsOpenDeletePostModal,
} from "../../pages/HomePage/selectors";
import Modal from "../Modal/Modal";
import { memo, useCallback, useMemo } from "react";
import Button from "../Button/Button";
import { deletePost } from "../../pages/HomePage/homePageSlice";
import "./DeletePostModal.css";

type DeletePostModalProps = {
  onCloseModal: () => void;
};

const DeletePostModal = memo(({ onCloseModal }: DeletePostModalProps) => {
  const dispatch = useDispatch();
  const isOpenDeletePostModal = useSelector(makeSelectIsOpenDeletePostModal);
  const isDeleteLoading = useSelector(makeSelectIsDeleteLoading);
  const deletePostId = useSelector(makeSelectDeletePostId);

  const confirmDeletePost = useCallback(() => {
    if (deletePostId) {
      dispatch(deletePost(deletePostId));
    }
  }, [dispatch, deletePostId]);

  const modalContent = useMemo(
    () => (
      <>
        <p className="delete-post-modal__text">Точно хотите удалить пост?</p>
        <div className="delete-post-modal__buttons">
          <Button title="cancel" onClick={onCloseModal} />
          <Button
            title="confirm"
            type="blue"
            isLoading={isDeleteLoading}
            onClick={confirmDeletePost}
          />
        </div>
      </>
    ),
    [confirmDeletePost, isDeleteLoading, onCloseModal]
  );

  return (
    isOpenDeletePostModal && (
      <Modal isActive={isOpenDeletePostModal} onCloseModal={onCloseModal}>
        {modalContent}
      </Modal>
    )
  );
});
export default DeletePostModal;
