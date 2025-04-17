import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with name
      await updateProfile(user, {
        displayName: name
      });

      // Store additional user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        createdAt: new Date().toISOString(),
        uid: user.uid
      });
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        uid: user.uid,
        email: user.email,
        displayName: name
      }));

      setSuccess('Account created successfully! Redirecting...');
      
      // Redirect after a short delay
      setTimeout(() => {
        navigate('/doctors');
      }, 1500);
      
    } catch (err) {
      console.error('Signup error:', err);
      setError(err instanceof Error ? err.message : 'Failed to create account. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          
          {success && (
            <div className="bg-green-50 text-green-500 p-3 rounded-md mb-4">
              {success}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="mt-1 text-sm text-gray-500">
                Password must be at least 6 characters long
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'Creating account...' : 'Sign up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
