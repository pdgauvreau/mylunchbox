import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette:{
    primary:{
      main:"#383d3b",
    },
    secondary:{
      main:"#dad2bc",
    },
    tertiary:{
      main:"#A99985",
    },
    fourth:{
      main:"#F5F1ED"
    },
    fifth:{
      main:"#534D56"
    }
  },
  typography: {
    h1: {
      fontSize:"4rem",
      fontWeight:600,
    },
    h2:{
      fontSize:"3rem",
      fontWeight:500,
    },
    h3:{
      fontSize:"2rem",
      fontWeight:500,
    }
  }
})

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme ={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
