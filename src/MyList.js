import React from 'react';
import { Hero, Row, THUMBNAILS } from './HomeContent';

export default function Movies({ onSignInClick }) {
  return (
    <main>
      <Hero
        title="Movies"
        description="Blockbusters, award winners, and hidden gems."
        image="https://via.placeholder.com/1920x1080/101010/FFFFFF?text=Movies"
        onSignInClick={onSignInClick}
      />
      <Row title="New Movies" items={THUMBNAILS} />
      <Row title="Action & Adventure" items={THUMBNAILS.map((t) => t.replace('Movie', 'Action'))} />
    </main>
  );
}