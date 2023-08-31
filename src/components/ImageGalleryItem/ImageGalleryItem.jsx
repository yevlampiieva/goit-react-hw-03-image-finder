import { Component } from 'react';
import { ModalImage } from 'components/Modal/Modal';
import { Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL, tags } = this.props.image;
    return (
      <>
        <Image src={webformatURL} alt={tags} onClick={this.toggleModal} />
        <ModalImage
          isOpen={isModalOpen}
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={this.toggleModal}
        />
      </>
    );
  }
}
