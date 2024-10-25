import logo from './logo.svg';
import './App.css';

import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ProductPage from './ProductPage';
import ProductDetail from './ProductDetail';

const App=()=> {
  // return (
  //   <html>
  //     <header>Phần Header</header>
  //     <Home/>
  //     <footer>Phần Footer</footer>
  //   </html>
  // );

  return (
  
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index path="/Home1" element={<Home/>} />
          <Route index path="/" element={<ProductPage/>} />
          <Route index path="/product/:id" element={<ProductDetail/>} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );


}

export default App;
