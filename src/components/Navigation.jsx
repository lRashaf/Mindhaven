import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { auth } from '../config/firebase';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('user');
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">MindCare</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/doctors" className="text-gray-700 hover:text-blue-600">Find a Doctor</Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600">Resources</Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-blue-600">
                  <User className="w-5 h-5 mr-1" />
                  {user.displayName || 'Dashboard'}
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <LogOut className="w-5 h-5 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-x-4">
                <Link to="/login" className="text-gray-700 hover:text-blue-600">Sign In</Link>
                <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/doctors"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Find a Doctor
            </Link>
            <Link
              to="/resources"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
