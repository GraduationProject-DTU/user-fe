import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom"
import Homepage from './Components/Pages/Homepage';
import Introduction from './Components/Pages/Introduction';
import ProductPage from './Components/Pages/ProductPage';
import Login from './Components/Layouts/Login/Login';
import Register from './Components/Layouts/Register/Register';
import Form from './Components/Layouts/Account/Form';
import Blogmain from './Components/Pages/Blogmain';
import Blogdetail from './Components/Layouts/Contents/Blog/Blogdetails';
import CartPage from './Components/Pages/CartPage';
import ProductDetailPage from './Components/Pages/ProductDetailPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path='intro' element={<Introduction />} />
          <Route path='product' element={<ProductPage />} />
          <Route path='form' element={<Form/>}/>
          <Route path='blog' element={<Blogmain/>}/>
          <Route path='blogdetails/' element ={<Blogdetail/>}/>
          <Route index path="/" element={<Homepage />} />
          <Route path='intro' element={<Introduction />} />
          <Route path='form' element={<Form />} />
          <Route path='blog' element={<Blogmain />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='product-detail' element={<ProductDetailPage />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
