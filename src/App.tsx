import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.tsx';
// import Cart from './pages/Cart.tsx';
// import FullPizza from './pages/FullPizza.tsx';
import NotFound from './pages/NotFound.tsx';
import MainLayout from './layouts/MainLayout.tsx';

import './scss/app.scss';

// или для серверого рендера/клиентского используем сторонюю библиотеку react-loadable или loadable components
const Cart = lazy(() => import(/* webpackChunkName: "Cart" */'./pages/Cart.tsx')); 
const FullPizza = lazy(() => import(/* webpackChunkName: "FullPizza" */'./pages/FullPizza.tsx'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идет загрузка корзины...</div>}> 
              <Cart />
            </Suspense>
          }
        /> 
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Идет загрузка пицц...</div>}>
              <FullPizza />
            </Suspense> // или на все роуты один загрузчик сделать
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
