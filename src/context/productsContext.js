import React, { useState, createContext, useContext } from 'react';
import fetchProducts from '../fetchAPI/products';

const productsObj = fetchProducts();

const productsContext = createContext();