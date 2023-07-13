import React from 'react'
import ReactDOM from 'react-dom/client'
//import Counter from './components/counter/Counter.jsx'
import './index.css'
import App from './App.jsx'
import GameCard from './game-card/GameCard'
import { GamesService } from './services/game-service.js'
import GamesList from './games-list/GamesList'

const gamesService = new GamesService();

const games = gamesService.getAllGames();

//console.log(games);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GamesList games={games}></GamesList>
  </React.StrictMode>,
)
