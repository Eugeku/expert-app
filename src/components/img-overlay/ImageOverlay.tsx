import { type FC, useState } from 'react';
import styles from './ImageOverlay.module.scss';

interface ImageOverlayProps {
  src: string;
  alt: string;
}

const ImageOverlay: FC<ImageOverlayProps> = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => setIsOpen((prev) => !prev);
  const closeOverlay = () => setIsOpen(false);

  return (
    <div className={styles.image_overlay_wrapper}>
      <img
        src={src}
        alt={alt}
        className={styles.image_overlay_wrapper__small_image}
        onClick={toggleOverlay}
      />

      {isOpen && (
        <div className={styles.overlay} onClick={closeOverlay}>
          <div className={styles.overlay__content}>
            <img
              src={src}
              alt={alt}
              className={styles.overlay__content__image}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageOverlay;
