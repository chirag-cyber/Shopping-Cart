import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/productList';
import Cart from './components/cart';

function App() {
  return (
    <CartProvider>
      <div>
        <h1>Shopping App</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
