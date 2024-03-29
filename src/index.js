import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SearchProvider } from './context/searchContext'; 
import { AuthProvider } from "./context/authContext";
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import html2canvas from 'html2canvas';

  html2canvas(document.documentElement, {
    scale: 2,
    allowTaint: true,
    useCORS: false,
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </AuthProvider>
);

