// import './App.css';
import CustomerForm from './pages/CustomerForm';
import AdminLogin from './pages/LoginAdmin'
import AdminForm from './pages/AdminForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';
// import Layout from './pages/Layout';


function App() {
  return (
       <>
       <CustomerForm/>
       <AdminForm/>
       <AdminLogin/>
       </>

  );
}

export default App;
