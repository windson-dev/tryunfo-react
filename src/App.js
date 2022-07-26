import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardContent: [],
    };
  }

  onInputChange = ({ target }) => {
    const { hasTrunfo } = this.state;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [target.name]: value });

    if (!hasTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  disabledButton = () => {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const twoHundredAndTen = 210;
    const ninety = 90;

    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= twoHundredAndTen
      && Number(cardAttr1) <= ninety && Number(cardAttr2) <= ninety
      && Number(cardAttr3) <= ninety && Number(cardAttr1) >= 0
      && Number(cardAttr2) >= 0 && Number(cardAttr3) >= 0
      && cardName.length !== 0 && cardDescription && cardImage
    ) {
      return false;
    }
    return true;
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;

    const sideStateSave = {
      a: cardName,
      b: cardDescription,
      c: cardAttr1,
      d: cardAttr2,
      e: cardAttr3,
      f: cardImage,
      g: cardRare,
      h: cardTrunfo,
    };

    this.setState((element) => ({
      cardContent: [...element.cardContent, sideStateSave],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
    }));
  }

  render() {
    const { cardContent } = this.state;
    return (
      <div>
        <h1>Tryunfoo</h1>
        <Form
          { ...this.state }
          onHasTrunfoChange={ this.onHasTrunfoChange }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.disabledButton() }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
        />
        {cardContent.map((element, key) => (
          <div key={ key }>
            <Card
              cardName={ element.a }
              cardDescription={ element.b }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
