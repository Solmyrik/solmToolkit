import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Password from './components/Password';
import Qr from './components/Qr';
import RandomNumber from './components/RandomNumber';
import Wish from './components/Wish';
import Сonverter from './components/Сonverter';
import Choice from './components/Choice';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="randomnumber" element={<RandomNumber />}></Route>
        <Route path="randompassword" element={<Password />}></Route>
        <Route path="qr" element={<Qr />}></Route>
        <Route path="converter" element={<Сonverter />}></Route>
        <Route path="wish" element={<Wish />}></Route>
        <Route path="сhoice" element={<Choice />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
