import './App.css';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import CricketTeam from './componants/CriketTeam/CriketTeam';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import LegendPlayer from './componants/LegendPlayer/LegendPlayer';

function App() {
  return (
    <div className="App">
      <Header></Header>
     
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/legendplayer'element={<LegendPlayer></LegendPlayer>}></Route>
        <Route path='/cricketteam'element={<CricketTeam></CricketTeam>}></Route>

      </Routes>

     
    </div>
  );
}

export default App;
