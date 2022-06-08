import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Navbar = lazy(() => import('../navbar'));
const LandingContainer = lazy(() => import('../landingContainer'));
const AboutContainer = lazy(() => import('../aboutContainer'));
const ProjectItemContainer = lazy(() => import('../projectItemContainer'));

const App = () => (
//   <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='*' element={<Navbar />} />
        <Route path='/' element={<LandingContainer />} />
        <Route path='/about' element={<AboutContainer />} />
        <Route path='/project/:projectName' element={<ProjectItemContainer />} />
      </Routes>
    </Suspense>
//   </Router>
);

export default App;