import { Component } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from '../services/image-api';
import { AppContainer } from './App.styled';

export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  };

  changeQuery = newQuery => {
    this.setState({ query: `${nanoid(5)}/${newQuery}`, images: [], page: 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery, page: prevPage } = prevState;
    const { query: nextQuery, page: nextPage } = this.state;
    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      const query = nextQuery.slice(
        nextQuery.indexOf('/') + 1,
        nextQuery.length
      );

      try {
        this.setState({ loading: true });
        const response = await fetchImages(query, this.state.page);
        const images = response.hits;
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
        toast.success('Wow, you are cool!');
      } catch (error) {
        toast.error('Oops, something went wrong, please try again later');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery images={images} />
        {loading && <Loader />}
        {!!images.length && images.length % 12 === 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
        <Toaster />
      </AppContainer>
    );
  }
}
