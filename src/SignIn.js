import React, { useState } from 'react';
import './SignIn.css';

export default function SignIn({ onSignIn, onBack }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const displayName = name?.trim() || (email ? email.split('@')[0] : 'User');
    onSignIn({ name: displayName, email });
  };

  return (
    <div className="signin-page">
      <div className="signin-overlay" />

      <header className="signin-header">
        <img
          className="signin-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
        />

        {onBack ? (
          <button className="signin-back" type="button" onClick={onBack}>
            Back
          </button>
        ) : null}
      </header>

      <section className="signin-card" aria-label="Sign in form">
        <h1>Sign In</h1>

        <form onSubmit={submit}>
          <label className="field">
            <span className="field-label">Name (optional)</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
            />
          </label>

          <label className="field">
            <span className="field-label">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="email"
              required
            />
          </label>

          <label className="field">
            <span className="field-label">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="current-password"
              required
            />
          </label>

          <button className="signin-submit" type="submit">
            Sign In
          </button>

          <div className="signin-help">
            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#" onClick={(e) => e.preventDefault()}>
              Need help?
            </a>
          </div>

          <p className="signin-meta">
            New to Netflix?{' '}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Sign up now
            </a>
          </p>
        </form>
      </section>
    </div>
  );
}