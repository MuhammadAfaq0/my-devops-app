import React from 'react';

const HERO = {
  title: 'Stranger Things',
  description:
    'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
  image: 'https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Stranger+Things',
};

export const THUMBNAILS = [  // ✅ Added 'export' here
  'https://via.placeholder.com/200x300/000000/FFFFFF?text=Movie1',
  'https://via.placeholder.com/200x300/000000/FFFFFF?text=Movie2',
  'https://via.placeholder.com/200x300/000000/FFFFFF?text=Movie3',
  'https://via.placeholder.com/200x300/000000/FFFFFF?text=Movie4',
  'https://via.placeholder.com/200x300/000000/FFFFFF?text=Movie5',
];

export function Hero({ title, description, image }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }} aria-label="Featured">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="buttons">
          <button type="button" className="play">Play</button>
          <button type="button" className="more-info">More Info</button>
        </div>
      </div>
    </section>
  );
}

export function Row({ title, items }) {
  return (
    <section className="row" aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}>
      <h2 id={title.replace(/\s+/g, '-').toLowerCase()}>{title}</h2>
      <div className="thumbnails" role="list">
        {items.map((src, idx) => (
          <img key={idx} src={src} alt={`${title} ${idx + 1}`} role="listitem" />
        ))}
      </div>
    </section>
  );
}

export default function HomeContent({ onSignInClick }) {
  return (
    <main>
      <Hero title={HERO.title} description={HERO.description} image={HERO.image} />
      <Row title="Trending Now" items={THUMBNAILS} />
      <Row title="Top Rated" items={THUMBNAILS.map((t) => t.replace('Movie', 'Top'))} />
    </main>
  );
}
