import logo from './logo.svg';
import './App.css';
import BtnEventComponent from './components/BtnEventComponents';
import React, { useState } from 'react';
import ClassKakadoMap from './components/ClassKakadoMap';

function App() {
  const [state, setState] = useState({ count: 10 });
  const resetEvent = () => { //기존 값+10으로 리셋하기
    //state 변경 let count = state.count;
    setState(prevState => ({
      count: prevState.count + 10,
    }));
  }
  return (
    <div className="App">
      {/* //<BtnEventComponent
        nodeValue={<h1>태그노드</h1>}
        count={state.count}
      >
        <h2>자식 노드 추가</h2>
      </BtnEventComponent>
      <button onClick={resetEvent}>{state.count + 10}으로 초기화</button>
       */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>HTML 태그를 자바스크립트에서 바로 사용.</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
