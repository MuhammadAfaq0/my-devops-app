import React, { useState } from 'react';
import './App.css';
import SignIn from './SignIn';

const NAV_ITEMS = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

import HomeContent, { Row } from './HomeContent';


function Header({ onSignIn, onSignOut, user }) {
  return (
    <header className="netflix-header" role="banner">
      <div className="header-inner">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix logo"
          className="netflix-logo"
        />

        <nav className="netflix-nav" aria-label="Main navigation">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          {user ? (
            <>
              <span className="profile-name">Hi, {user.name}</span>
              <button type="button" className="sign-in" onClick={onSignOut} aria-label="Sign out">
                Sign Out
              </button>
            </>
          ) : (
            <button type="button" className="sign-in" onClick={onSignIn} aria-label="Sign in">
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

function NetflixHome({ onSignInClick }) {
  return (
    <div className="netflix">
      <Header onSignIn={onSignInClick} />
      <HomeContent onSignInClick={onSignInClick} />
    </div>
  );
}

function Browse({ user, onSignOut }) {
  return (
    <div className="netflix">
      <Header onSignOut={onSignOut} user={user} />
      <main>
        <section className="browse-hero">
          <div className="browse-content">
            <h2>Welcome, {user?.name}</h2>
            <p>Pick up where you left off or explore new releases curated for you.</p>
          </div>
        </section>

        <Row title="Recommended for you" items={THUMBNAILS} />
        <Row title="Continue Watching" items={THUMBNAILS.slice(0, 4)} />
      </main>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);

  const handleSignIn = (userObj) => {
    setUser(userObj || { name: 'User' });
    setPage('browse');
  };

  const handleSignOut = () => {
    setUser(null);
    setPage('signin');
  };

  return page === 'signin' ? (
    <SignIn onSignIn={handleSignIn} />
  ) : page === 'browse' ? (
    <Browse user={user} onSignOut={handleSignOut} />
  ) : (
    <NetflixHome onSignInClick={() => setPage('signin')} />
  );
}

export default App;
