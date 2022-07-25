import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
    };
  }

  onInputChange = ({ target }) => {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  // onSaveButtonClick = (event) => {
  //   this.setState({ isSaveButtonDisabled: true });
  //   event.preventDefault();
  // }

  render() {
    const { cardName } = this.state;
    return (
      <div>
        <h1>Tryunfoo</h1>
        <Form value={ cardName } onInputChange={ this.onInputChange } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
