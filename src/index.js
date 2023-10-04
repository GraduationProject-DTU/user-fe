import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider
} from "react-router-dom"
import Homepage from './Components/Pages/Homepage';
import Introduction from './Components/Pages/Introduction';
<<<<<<< HEAD
import ProductPage from './Components/Pages/ProductPage';

=======
import Login from './Components/Layouts/Login/Login';
import Register from './Components/Layouts/Register/Register';
>>>>>>> b4a084c38dd6a8710b4d454753e5c58c447551f3
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
<<<<<<< HEAD
          <Route index path="/" element={<Homepage />} />
          <Route path='intro' element={<Introduction />} />
          <Route path='product' element={<ProductPage />} />
=======
            <Route index path="/" element={<Homepage/>}/>
            <Route path='intro' element={<Introduction/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
>>>>>>> b4a084c38dd6a8710b4d454753e5c58c447551f3
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
