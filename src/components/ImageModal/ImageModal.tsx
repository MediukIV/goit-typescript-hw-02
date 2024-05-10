import { FC } from 'react';
import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { ImageSrc } from '../../App';

interface ImageModalProps {
  isOpen: boolean;
  photo: { src: string };
  closeModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  photo,
  closeModal,
}) => {
  return (
    <div className={css.modalBlock}>
    <Modal
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Selected Image"
      appElement={document.getElementById("root") as HTMLElement}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
    >
      <img className={css.image} src={photo.src} />
      <button className={css.modalBtn} onClick={closeModal}>Close</button>
      </Modal>
      </div>
  );
};

export default ImageModal;
