import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * User Profile Page
 * 
 * User profile/dashboard page for APPLEPUNK (without authentication)
 * This is a UI-only implementation as requested.
 */
function User() {
  const [logoError, setLogoError] = useState(false);
  const [bioLogoError, setBioLogoError] = useState(false);

  // Mock user data (no auth)
  const user = {
    name: 'SebG',
    email: 'founder@applepunk.com',
    role: 'Creator & Developer',
    joinDate: 'December 2024',
    bio: 'Passionate web designer and app developer with a love for creative digital experiences. Specializing in iOS development and modern web technologies.',
  };

  return (
    <main className="hex-bg min-h-screen py-12 px-4">
      <div className="container max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <Link to="/" className="inline-block mb-4">
            {!logoError && (
              <img 
                src="/seublogo.png" 
                alt="APPLEPUNK Logo" 
                className="w-16 h-16 mx-auto object-contain rounded-lg"
                onError={() => setLogoError(true)}
              />
            )}
          </Link>
          <h1 className="text-3xl font-bold">
            <span className="gradient-text">User Profile</span>
          </h1>
        </header>

        {/* Profile Card */}
        <div className="card glow-border mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Avatar with Bio Logo */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 overflow-hidden">
              {bioLogoError ? (
                <span className="text-4xl">👤</span>
              ) : (
                <img 
                  src="/logo.png" 
                  alt="Profile Avatar"
                  className="w-28 h-28 rounded-full object-cover"
                  onError={() => setBioLogoError(true)}
                />
              )}
            </div>
            
            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-1">{user.name}</h2>
              <p className="text-cyan-400 mb-2">{user.role}</p>
              <p className="text-gray-400 text-sm mb-4">{user.email}</p>
              <p className="text-gray-300">{user.bio}</p>
              <p className="text-gray-500 text-sm mt-4">Member since {user.joinDate}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link to="/devhub" className="card glow-border text-center hover:border-cyan-500 transition-colors">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="text-lg font-bold text-white mb-2">Man Cave</h3>
            <p className="text-gray-400 text-sm">Enter the Developer Cave</p>
          </Link>
          
          <div className="card glow-border text-center opacity-75">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="text-lg font-bold text-white mb-2">Settings</h3>
            <p className="text-gray-400 text-sm">Coming soon</p>
          </div>
          
          <div className="card glow-border text-center opacity-75">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-bold text-white mb-2">Dashboard</h3>
            <p className="text-gray-400 text-sm">Coming soon</p>
          </div>
        </div>

        {/* Activity Section */}
        <div className="card glow-border mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-cyan-400">📈</span>
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-gray-900/30 rounded-lg">
              <span className="text-2xl">🎨</span>
              <div>
                <p className="text-white">Joined APPLEPUNK</p>
                <p className="text-gray-500 text-sm">Welcome to the creative community!</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-gray-900/30 rounded-lg">
              <span className="text-2xl">🔓</span>
              <div>
                <p className="text-white">Profile Created</p>
                <p className="text-gray-500 text-sm">Your journey begins here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <Link 
            to="/devhub"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Man Cave
          </Link>
          <Link 
            to="/login"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </Link>
        </div>
      </div>
    </main>
  );
}

export default User;
