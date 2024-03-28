import { memo, useCallback, useEffect, useMemo, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  makeSelectIsAddPostLoading,
  makeSelectIsOpenAddPostModal,
} from "../../pages/HomePage/selectors";
import { addPost } from "../../pages/HomePage/homePageSlice";
import "./AddPostModal.css";

type AddPostModalProps = {
  onCloseModal: () => void;
};

const AddPostModal = memo(({ onCloseModal }: AddPostModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const dispatch = useDispatch();
  const isOpenAddPostModal = useSelector(makeSelectIsOpenAddPostModal);
  const isAddPostLoading = useSelector(makeSelectIsAddPostLoading);

  const changeTitle = useCallback((title: string) => {
    setErrorMessage(title ? undefined : 'Введите "title"');
    setTitle(title);
  }, []);

  const changeDescription = useCallback((description: string) => {
    setDescription(description);
  }, []);

  const confirmAddPost = useCallback(() => {
    if (title) {
      dispatch(addPost({ title, description }));
    } else {
      setErrorMessage('Введите "title"');
    }
  }, [dispatch, title, description]);

  const closeAddPostModal = useCallback(() => {
    onCloseModal();
  }, [onCloseModal]);

  useEffect(() => {
    if(!isOpenAddPostModal) {
      setTitle("");
      setDescription("");
      setErrorMessage(undefined);
    }
  }, [isOpenAddPostModal ]);

  const modalContent = useMemo(
    () => (
      <>
        <Input
          title="Title:"
          placeholder="Название"
          value={title}
          message={errorMessage}
          onChange={changeTitle}
        />
        <Input
          title="Description:"
          placeholder="Описание"
          value={description}
          onChange={changeDescription}
        />
        <div className="add-post-modal__buttons">
          <Button title="cancel" onClick={closeAddPostModal} />
          <Button
            title="create"
            type="blue"
            isLoading={isAddPostLoading}
            onClick={confirmAddPost}
          />
        </div>
      </>
    ),
    [
      confirmAddPost,
      description,
      isAddPostLoading,
      closeAddPostModal,
      title,
      errorMessage,
      changeTitle,
      changeDescription,
    ]
  );

  return (
    <Modal isActive={isOpenAddPostModal} onCloseModal={closeAddPostModal}>
      {modalContent}
    </Modal>
  );
});

export default AddPostModal;
