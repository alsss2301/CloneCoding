import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/routes/Home';
import Detail from './components/routes/Detail';
import Review from './components/routes/Review';

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/movie/:id"> 
        <Detail />
      </Route>
      <Route path="/review/:id">
        <Review /> 
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch> 
  </Router>
  ); //<Router> : 누군가 이미 만들어놓은 컴포넌트임.
} 
//<Switch>는 route를 찾아 렌더링 해줌.
//path='/'는 /url이 있다면 home을 렌더링해준다는 의미, <Route></Route>홈으로 가는 Route 만들어짐.
//"/movie/:id" 은 url 변수, movie.id가 되면서 http://localhost:3000/movie/37384 이렇게 나옴
export default App;
