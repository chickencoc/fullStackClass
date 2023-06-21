import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState();
  const [time, setTime] = useState(new Date());
  const dayList = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const [num, setNum] = useState(0);

  useEffect(() => {
    fetch("https://chickencoc.github.io/saying/sList.json")
    .then(res => res.json())
    .then(data => setList(data));
  },[])

  const listRef = useRef();
  const contentRef = useRef();
  useEffect(() => {
    listRef.current = setInterval(() => {
      if(num !== 6) setNum(num + 1);
      else setNum(0);

      contentRef.current.className = "animation";
      setTimeout(() => {
        contentRef.current.className = "";
      }, 3000);
    }, 5000);

    return () => {
      clearInterval(listRef.current);
    };
  });
  

  return (
    <div id="container">
      <div id="content" ref={contentRef}>
        <article>
          {list && list[num].content}
          <p>- {list && list[num].name}</p>
        </article>
      </div>
      <div id="info">
        <h3 id="day">{dayList[time.getDay()]}</h3>
        <h1 id="date">{time.getMonth() + 1}/{time.getDate()}</h1>
      </div>
      <div id="btnBox">
        <button id="moreInfo">더보기</button>
      </div>
    </div>
  )
}

export default App
