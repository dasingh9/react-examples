import React from 'react'
import ReactDOM from 'react-dom/client'
//import Counter from './components/counter/Counter.jsx'
import './index.css'
import GameCard from './game-card/GameCard'
import { GamesService } from './services/game-service.js'
import GamesList from './games-list/GamesList'
import Welcome from './components/Welcome'
import PropsDisplayer from './components/PropsDisplayer'
import City from './components/City'
import MoviesList from './components/MoviesList'
import MoodChanger from './components/MoodChanger'
import BirthdayTranslator from './components/BirthdayTranslator'

const gamesService = new GamesService();

const games = gamesService.getAllGames();

//console.log(games);
/*
const product = {id: 101, productName:"Yummy burger", price:10.87}

const auckland = {
  cityName:"Auckland",
  suburbs: ['Papakura', 'Auckland CBD']
}

const cities = [
  {
    cityName:"Auckland",
    suburbs: ['Papakura', 'Auckland CBD']
  },
  {
    cityName:"Hamilton",
    suburbs: ['Hamilton', 'Pukete']
  }
];
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GamesList games={games}></GamesList>
  </React.StrictMode>,
)
