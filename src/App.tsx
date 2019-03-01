import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game/game-row/GameRow';

import {GameType, Plateform} from './game/game.type';
const gameData = {
  title: "Un titre",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam similique expedita at repellat harum alias, sapiente culpa distinctio et amet facere officiis sequi cupiditate ratione, illum voluptate accusantium quaerat!",
  img: "String",
  type: GameType.ACTION,
  platform: Plateform.PS4,
  score: 16,
  price: 20.90,
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game {...gameData}/>
      </div>
    );
  }
}

export default App;
