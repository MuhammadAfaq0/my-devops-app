import React from 'react';
import { Hero, Row, THUMBNAILS } from './HomeContent';

export default function BrowseHome({ user }) {
  return (
    <main>
      <Hero
        title={`Welcome back${user?.name ? `, ${user.name}` : ''}`}
        description="Pick up where you left off or explore new releases curated for you."
        image="https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Welcome+Back"
      />
      <Row title="Recommended for you" items={THUMBNAILS} />
      <Row title="Continue Watching" items={THUMBNAILS.slice(0, 4)} />
    </main>
  );
}