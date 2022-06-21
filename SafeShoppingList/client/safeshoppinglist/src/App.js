//Purpose:  check if a user is logged in then display NavBar and Application View otherwise it goes to log in or register

import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ShoppingList from './components/shoppinglist/ShoppingList.js';
import Header from "./components/layout/Header.js";
import { RecallProvider } from './providers/RecallProvider.js';

export default function App () {
  return (
  <>
   <Router>
    <RecallProvider>
     < Header />
     < ShoppingList />
    </RecallProvider>
   </Router>
   </>
  );
}


