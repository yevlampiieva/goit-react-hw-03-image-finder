import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSearchQuery = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      alert('Input some value');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <ImSearch style={{ width: 20, height: 20 }} />
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleSearchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
