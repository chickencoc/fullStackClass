import { useState } from 'react'
import './App.css'
import Post from './components/post';

function FetchExemple() {
  // https://jsonplaceholder.typicode.com/
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setData(json))
  }

  return (
    <>
      <div id="top">
        <h1>Очистите комнату</h1>
        <button onClick={fetchData}>получить данные</button>
      </div>
      <div id="todoList">
        <ul>
          {
            data && 
              data.map((list) => {
                return (
                  <Post key={list.id} userId={list.userId} id={list.id} title={list.title} />
                )
              })
          }
        </ul>
      </div>
    </>
  )
}

export default FetchExemple
