import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Sewa from './pages/Cari';
import Detail from './pages/Detail';
///tesss
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sewa" element={<Sewa />} />
        <Route path="/sewa/detail/:id" element={<Detail />} />

      </Routes>
    </>
  )
}

export default App
