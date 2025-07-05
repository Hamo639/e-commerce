import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import Header1 from "./component/Header/Header1";
import Footer from "./component/Footer/Footer";
import Cardd from "./pages/card";
import Productdetails from "pages/productdetails/Productdetails";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/Ordersucsses";
import ProtectedRoute from "./pages/ProtectRoutes";
function App() {
  const [mode, setmode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header1 setmode={setmode} mode={mode} />

      <Routes>
  {/* الصفحات العامة */}
  <Route path="/signin" element={<Signin />} />
  <Route path="/signup" element={<Signup />} />

  {/* الصفحات المحمية */}
  <Route 
    path="/" 
    element={
      <ProtectedRoute>
        <Home mode={mode} setmode={setmode} />
      </ProtectedRoute>
    } 
  />
  
  <Route 
    path="/productdetails/:id" 
    element={
      <ProtectedRoute>
        <Productdetails setmode={setmode} mode={mode} />
      </ProtectedRoute>
    } 
  />

  <Route 
    path="/card" 
    element={
      <ProtectedRoute>
        <Cardd />
      </ProtectedRoute>
    }
  />

  <Route 
    path="/checkout" 
    element={
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    }
  />

  <Route 
    path="/ordersucsess" 
    element={
        <OrderSuccess />
    }
  />
</Routes>


        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;
