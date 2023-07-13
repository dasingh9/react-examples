import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  const validJSX1 =
    <div>
      <p>paragraph 1</p>
      <p>paragraph 2</p>
    </div>;

  const validJSX2 =
    <>
      <p>paragraph 1</p>
      <p>paragraph 2</p>
    </>;


  var name = "Bob";
  const status = "hungry";

  return (
    <>
      <div className="card"> {/*this is a comment*/}
        <button onClick={function () { setCount(function (count) { count + 1 }) }}>

        <span>
          {status=="hungry"?"Eat Something":"Have some rest"}
        </span>

        </button>
      </div>
    </>
  )
}

export default Counter
