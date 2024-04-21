
import './App.css'
import Counter from './Counter.jsx'
import Team from './team.jsx'
import Users from './users.jsx'
import Friends from './Friends.jsx'
import Friend from './Friend.jsx'
function App() {
  
  
  function handleClick(){

    alert('Button  clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      
      <h1> React Core concepts</h1>
      <Friend></Friend>
      <Friends></Friends>
      <Users></Users>
      
      <Team></Team>

     <Counter></Counter>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert ('third clicked')}}>Third</button>
     <button onClick={() => addToFive(3)}>four</button>
     
    </>
  )
}

export default App
