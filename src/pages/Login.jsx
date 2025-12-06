import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Login Page
 * 
 * User login page for APPLEPUNK (without authentication)
 * This is a UI-only implementation as requested.
 */
function Login() {
  const [logoError, setLogoError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // No authentication - just UI
    alert('Login functionality coming soon!');
  };

  return (
    <main className="hex-bg min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="container max-w-md">
        {/* Login Card */}
        <div className="card glow-border">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-4">
              {!logoError && (
                <img 
                  src="/seublogo.png" 
                  alt="APPLEPUNK Logo" 
                  className="w-20 h-20 mx-auto object-contain rounded-lg"
                  onError={() => setLogoError(true)}
                />
              )}
            </Link>
            <h1 className="text-3xl font-bold mb-2">
              <span className="gradient-text">Login</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Sign in to your APPLEPUNK account
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-400">
                <input type="checkbox" className="mr-2 rounded border-gray-600 bg-gray-900/50 text-cyan-500 focus:ring-cyan-500" />
                Remember me
              </label>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full glow-btn py-3 rounded-lg text-white font-semibold"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-white font-medium flex items-center justify-center gap-3 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Continue with GitHub
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-gray-400 text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Sign up
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
