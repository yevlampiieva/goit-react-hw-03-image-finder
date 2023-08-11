import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { AppContainer } from './App.styled';

export default class App extends Component {
  state = {
    searchValue: '',
  };

  handleFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </AppContainer>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
