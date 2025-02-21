import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Routes, Route } from 'react-router-dom';

import './index.css';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import SelectionList from './components/SelectionList';
import SearchEmailPage from './components/SearchEmailPage';
import CreateContentPage from './components/CreateContentPage';
import reportWebVitals from './reportWebVitals';
import ServiceProvider from './context/ServiceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ServiceProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/selection-list" element={<SelectionList />} />
          <Route path="/search-email" element={<SearchEmailPage />} />
          <Route path="/create-content" element={<CreateContentPage />} />
        </Routes>
      </ServiceProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
