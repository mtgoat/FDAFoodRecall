//Purpose:  check if a user is logged in then display NavBar and Application View otherwise it goes to log in or register

import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header.js';
import { RecallProvider } from './providers/RecallProvider.js';
import {ApplicationViews} from './components/ApplicationViews.js';

export default function App () {
  return (
  <>
   <Router>
    <RecallProvider>
     < Header />
     < ApplicationViews />
    </RecallProvider>
   </Router>
   </>
  );
}


