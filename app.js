import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import card from "./card.json";


class App extends Component {
  
  state = {
    card,
    count: 0
  };


  handleIncrement = id => {
    this.setState({ count: this.state.count + 1 });
  };



  
  render() {
    return (
      <Wrapper>
        <Title>Starwars</Title>
        {this.state.card.map(card => (
          <Card
            removeCard={this.removeCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            occupation={card.occupation}
            location={card.location}
          />
        ))}
      </Wrapper>
    );
  }
} 



export default App