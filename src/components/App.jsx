import { Component } from 'react';
import {nanoid} from 'nanoid';
import { Searchbar } from './Searchbar/Searchbar';
import { AppContainer } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from '../services/image-api';

// changeQuery = newQuery => {
//   this.setState({ query: newQuery });
// };

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
    const {query: prevQuery, page: prevPage } = prevState;
    const {query: nextQuery, page: nextPage } = this.state;
    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      const query = nextQuery.slice(nextQuery.indexOf('/') + 1, nextQuery.length)
       
      try {
    this.setState({ loading: true });
    const images = await fetchImages(query, this.state.page);
        this.setState({ images });        
  } catch (error) {
    console.log(error);
      }
      finally {
    this.setState({ loading: false });
  }

    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery images={this.state.images} />
        <Button onClick={this.handleLoadMore} />
      </AppContainer>
    );
  }
}

// async componentDidMount() {
//   try {
//     this.setState({ loading: true });
//     const images = await fetchImages();
//     this.setState({ images });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     this.setState({ loading: false });
//   }
// }

// async componentDidUpdate(prevProps, prevState) {

//   if (prevState.query !== this.state.query) {

//   }
// }
