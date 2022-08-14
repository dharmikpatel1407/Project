import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Layout from './Common/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/main" element={<Layout />}>
     
      {/* <Route path="*" element={<NoPage />} /> */}
    </Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
