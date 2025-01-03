"use client"
import React, { useState } from 'react';

const LoginSignInPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', { email, password });
    } else {
      console.log('Signing up with:', { username, email, password });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-200">
      <div className="w-full max-w-md p-8 bg-orange-50 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Login' : 'Sign In'}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </label>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            {isLogin ? 'Login' : 'Sign In'}
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="w-full mt-4 text-blue-600 hover:underline"
        >
          Switch to {isLogin ? 'Sign In' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default LoginSignInPage;
