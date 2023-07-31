import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Spinner from './Components/Spinner';
const LazyCheckoutPage = lazy(() => import('./Pages/CheckoutPage'));
const LazyCheckoutPageSecond = lazy(() => import('./Pages/CheckoutPageSecond'));
const Payment = lazy(() => import('./Pages/Payment'));
const PageOne = lazy(() => import('./Pages/Pageone'));

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/pageone" element={<Suspense fallback={<Spinner/>}><LazyCheckoutPage /></Suspense>} />
          <Route path="/checkout" element={<Suspense fallback={<Spinner/>}><LazyCheckoutPageSecond /></Suspense>} />
          <Route path="/payment" element={<Suspense fallback={<Spinner/>}><Payment /></Suspense>} />
          <Route path="/" element={<Suspense fallback={<Spinner/>}><PageOne /></Suspense>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
