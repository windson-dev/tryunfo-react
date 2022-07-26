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

  disabledButton = () => {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const twoHundredAndTen = 210;
    const ninety = 90;
    const zero = 0;

    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= twoHundredAndTen
      && Number(cardAttr1) <= ninety && Number(cardAttr2) <= ninety
      && Number(cardAttr2) <= ninety && Number(cardAttr3) >= zero
      && Number(cardAttr3) >= zero && Number(cardAttr1) >= zero
      && cardName.length !== 0 && cardDescription.length !== 0 && cardImage.length !== 0
    ) {
      return false;
    }

    return true;
  }

  onSaveButtonClick = () => {

  }

  render() {
    const { cardName } = this.state;
    return (
      <div>
        <h1>Tryunfoo</h1>
        <Form
          value={ cardName }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ this.disabledButton() }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
