import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spinner from '../components/lazy/Spinner';

const Home = lazy(() => import('../pages/Home'));
// const Gallery = lazy(() => import('../pages/Gallery')); // Remove import

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          {/* Remove route */}
          {/* future routes */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
