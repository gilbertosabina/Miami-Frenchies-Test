import { Routes, Route } from "react-router-dom";
import './App.scss';

import Home from './pages/Home';
import Buy from './pages/Buy';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <div className={"App"}>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/buy" element={<Buy/>} />
          </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
