import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './views/NotFound';
import DefaultLayout from './views/layouts/DefaultLayout';
import Home from './views/Home';
import About from './views/About';
import DashboardLayout from './views/layouts/DashboardLayout';
import Dashboard from './views/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
