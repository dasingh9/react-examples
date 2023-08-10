import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter/Counter'
import Spinner from './components/spinner/Spinner'
import { UserProvider } from './context/UserContext'
import LoginForm from './components/LoginForm'


function App() {
  const [count, setCount] = useState(0)

  const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
  const spideyJSX = (<div>
    <h3>{spiderman.name}</h3>
    <blockquote>{spiderman.catchPhrase}</blockquote>
    <cite>{spiderman.alterEgo}</cite>
  </div>);


  return (
    <>
          <UserProvider>
              <LoginForm></LoginForm>
          </UserProvider>
    </>
  )
}

export default App
