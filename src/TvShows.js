import React from 'react';
import { Hero, Row, THUMBNAILS } from './HomeContent';

export default function TvShows({ onSignInClick }) {
  return (
    <main>
      <Hero
        title="TV Shows"
        description="Binge-worthy series, trending seasons, and new episodes."
        image="https://via.placeholder.com/1920x1080/0b0b0b/FFFFFF?text=TV+Shows"
        onSignInClick={onSignInClick}
      />
      <Row title="Trending TV" items={THUMBNAILS.map((t) => t.replace('Movie', 'TV'))} />
      <Row title="Top 10 TV Today" items={[...THUMBNAILS].reverse()} />
    </main>
  );
}