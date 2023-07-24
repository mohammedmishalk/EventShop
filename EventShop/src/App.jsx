import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const LazyCheckoutPage = lazy(() => import('./Pages/CheckoutPage'));
const LazyCheckoutPageSecond = lazy(() => import('./Pages/CheckoutPageSecond'));

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><LazyCheckoutPage /></Suspense>} />
          <Route path="/checkout" element={<Suspense fallback={<div>Loading...</div>}><LazyCheckoutPageSecond /></Suspense>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
