import './App.css';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import CricketTeam from './componants/CriketTeam/CriketTeam';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import LegendPlayer from './componants/LegendPlayer/LegendPlayer';
import About from './componants/About/About';
import Footer from './componants/Footer/Footer';
import CountryDetail from './componants/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
     
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/legendplayer'element={<LegendPlayer></LegendPlayer>}></Route>
        <Route path='/cricketteam'element={<CricketTeam></CricketTeam>}></Route>
        <Route path='/singleCountry/:countryId' element={<CountryDetail></CountryDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>
      <Footer></Footer>

     
    </div>
  );
}

export default App;
