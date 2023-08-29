import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList, GalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(image => (
        <GalleryItem key={image.id}>
          <ImageGalleryItem image={image} />
        </GalleryItem>
      ))}
    </ImageGalleryList>
  );
};
