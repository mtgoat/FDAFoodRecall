import React, { useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ShoppingList from './shoppinglist/ShoppingList.js';
import {RecallProvider } from '../providers/RecallProvider.js';
import { Detail } from './shoppinglist/Detail.js';

export const ApplicationViews = () => {

    return (
        <>
        <RecallProvider>
            <Routes>
            <Route path="/" element={<ShoppingList />} />
            <Route path="/items/:itemId" element={< Detail />}/>
            </Routes>

        </RecallProvider>
        </>
    )
}