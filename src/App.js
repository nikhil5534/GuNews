import './App.css';
import React, { useState } from 'react'
import Nav from './components/Nav';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App=()=>{
  const [progress, setProgress] = useState(0);
    return (
      <div>
        <Router>
        <Nav/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
       <Routes>
        <Route exact path='/' element={<News setProgress={setProgress}  key="general" pageSize={8} country="in" category="general" />} />
        <Route exact path='/business' element={<News setProgress={setProgress}  key="business" pageSize={8} country="in" category="business" />} />
        <Route exact path='/entertainment' element={<News setProgress={setProgress}  key="entertainment" pageSize={8} country="in" category="entertainment" />} />
        <Route exact path='/general' element={<News setProgress={setProgress}  key="general" pageSize={8} country="in" category="general" />} />
        <Route exact path='/health' element={<News setProgress={setProgress}  key="health" pageSize={8} country="in" category="health" />} />
        <Route exact path='/science' element={<News setProgress={setProgress}   key="science"pageSize={8} country="in" category="science" />} />
        <Route exact path='/sports' element={<News setProgress={setProgress}   key="sports"pageSize={8} country="in" category="sports" />} />
        <Route exact path='/technology' element={<News setProgress={setProgress}  key="technology" pageSize={8} country="in" category="technology" />} />


       </Routes>
        </Router>
      </div>
    );
  }
export default App;
// api  key-2aa8d1918a1140d786fc664bf3aaef10
