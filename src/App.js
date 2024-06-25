import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoute from './screen/Routes/mainroute/MainRoute';
import Hr from './screen/pages/main/HR/Hr';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoute />}>
          <Route path='/hr' element={<Hr />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}
export default App;


