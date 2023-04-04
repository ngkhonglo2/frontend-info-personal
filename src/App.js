import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Login from './Auth/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './Auth/Register/Register';

const ContainterApp = styled.div`
  width: 100%;
`

function App() {
  return (
    <ContainterApp>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    </ContainterApp>
  );
}

export default App;
