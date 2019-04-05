import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameList from './game/game-list/GameList';

import {EGameType, EPlateform} from './game/game.type';
const games = [
  {
    title: "Un titre",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam similique expedita at repellat harum alias, sapiente culpa distinctio et amet facere officiis sequi cupiditate ratione, illum voluptate accusantium quaerat!",
    img: "String",
    type: EGameType.ACTION,
    platform: EPlateform.PS4,
    score: 16,
    price: 20.90,
  },
  {
    title: "Un titre",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam similique expedita at repellat harum alias, sapiente culpa distinctio et amet facere officiis sequi cupiditate ratione, illum voluptate accusantium quaerat!",
    img: "String",
    type: EGameType.ACTION,
    platform: EPlateform.SWITCH,
    score: 16,
    price: 20.90,
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameList data={games}/>
      </div>
    );
  }
}

export default App;
