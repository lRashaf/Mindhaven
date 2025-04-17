import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Appointment from './pages/Appointment';
import Resources from './pages/Resources';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Testimonials from './pages/Testimonials';
import WellnessTracker from './pages/WellnessTracker';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/dashboard" 
              element={user ? <Dashboard /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/wellness-tracker" 
              element={user ? <WellnessTracker /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <SignUp /> : <Navigate to="/dashboard" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/dashboard" />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
