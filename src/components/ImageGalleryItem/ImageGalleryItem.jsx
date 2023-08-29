import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, tags } = image;
  return <Image src={webformatURL} alt={tags} />;
};
