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
        <p className="modal__text">Точно хотите удалить пост?</p>
        <div className="modal__buttons">
          <Button title="отмена" type="default" onClick={onCloseModal} />
          <Button
            title="удалить"
            type={"blue"}
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
      <Modal
        isActive={isOpenDeletePostModal}
        isDeleteLoading={isDeleteLoading}
        onCloseModal={onCloseModal}
      >
        {modalContent}
      </Modal>
    )
  );
})
export default DeletePostModal;
