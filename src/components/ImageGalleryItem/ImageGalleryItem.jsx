import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  const { id, webformatURL, largeImageURL, tags } = image;
  return <Image src={webformatURL} alt={tags} />;
};
