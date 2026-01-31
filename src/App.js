import React, { useEffect, useState } from 'react';
import './App.css';

import SignIn from './SignIn';
import HomeContent from './HomeContent';

import BrowseHome from './BrowseHome';
import TvShows from './TvShows';
import Movies from './Movies';
import NewPopular from './NewPopular';
import MyList from './MyList';

const NAV_ITEMS = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

function Header({ onSignIn, onSignOut, user, activeNav, onNavSelect }) {
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
                <a
                  href="#"
                  className={activeNav === item ? 'nav-link active' : 'nav-link'}
                  aria-current={activeNav === item ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavSelect(item);
                  }}
                >
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
              <button type="button" className="sign-in" onClick={onSignOut}>
                Sign Out
              </button>
            </>
          ) : (
            <button type="button" className="sign-in" onClick={onSignIn}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const [page, setPage] = useState('home'); // 'home' | 'signin' | 'browse'
  const [user, setUser] = useState(null);

  // Shared navbar tab state for BOTH home + browse
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    // nicer UX: when switching tabs, jump to top
    window.scrollTo(0, 0);
  }, [activeNav, page]);

  const handleSignIn = (userObj) => {
    setUser(userObj || { name: 'User' });
    setPage('browse');
  };

  const handleSignOut = () => {
    setUser(null);
    setPage('home');
    setActiveNav('Home');
  };

  const renderTabContent = ({ signedIn }) => {
    const onSignInClick = () => setPage('signin');

    switch (activeNav) {
      case 'TV Shows':
        return <TvShows onSignInClick={signedIn ? undefined : onSignInClick} />;

      case 'Movies':
        return <Movies onSignInClick={signedIn ? undefined : onSignInClick} />;

      case 'New & Popular':
        return <NewPopular onSignInClick={signedIn ? undefined : onSignInClick} />;

      case 'My List':
        return <MyList signedIn={signedIn} onSignInClick={onSignInClick} />;

      case 'Home':
      default:
        return signedIn ? (
          <BrowseHome user={user} />
        ) : (
          <HomeContent onSignInClick={onSignInClick} />
        );
    }
  };

  if (page === 'signin') {
    return <SignIn onSignIn={handleSignIn} onBack={() => setPage(user ? 'browse' : 'home')} />;
  }

  if (page === 'browse') {
    return (
      <div className="netflix">
        <Header
          user={user}
          onSignOut={handleSignOut}
          activeNav={activeNav}
          onNavSelect={setActiveNav}
        />
        {renderTabContent({ signedIn: true })}
      </div>
    );
  }

  // page === 'home'
  return (
    <div className="netflix">
      <Header
        onSignIn={() => setPage('signin')}
        activeNav={activeNav}
        onNavSelect={setActiveNav}
      />
      {renderTabContent({ signedIn: false })}
    </div>
  );
}