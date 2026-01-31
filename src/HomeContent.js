import React from 'react';

const HERO = {
  title: 'Stranger Things',
  description:
    'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
  image: 'https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Stranger+Things',
};

export const THUMBNAILS = [
  'https://via.placeholder.com/600x338/111111/FFFFFF?text=Movie+1',
  'https://via.placeholder.com/600x338/111111/FFFFFF?text=Movie+2',
  'https://via.placeholder.com/600x338/111111/FFFFFF?text=Movie+3',
  'https://via.placeholder.com/600x338/111111/FFFFFF?text=Movie+4',
  'https://via.placeholder.com/600x338/111111/FFFFFF?text=Movie+5',
];

export function Hero({ title, description, image, onSignInClick }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }} aria-label="Featured">
      <div className="hero-overlay" />
      <div className="hero-vignette" />
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-desc">{description}</p>

        <div className="buttons">
          <button type="button" className="play">Play</button>
          <button type="button" className="more-info">More Info</button>
          {onSignInClick ? (
            <button type="button" className="cta" onClick={onSignInClick}>
              Sign In to Watch
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function Row({ title, items }) {
  const id = title.replace(/\s+/g, '-').toLowerCase();

  return (
    <section className="row" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      <div className="thumbnails" role="list">
        {items.map((src, idx) => (
          <div className="thumb" key={idx} role="listitem">
            <img src={src} alt={`${title} ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomeContent({ onSignInClick }) {
  return (
    <main>
      <Hero
        title={HERO.title}
        description={HERO.description}
        image={HERO.image}
        onSignInClick={onSignInClick}
      />
      <Row title="Trending Now" items={THUMBNAILS} />
      <Row title="Top Rated" items={THUMBNAILS.map((t) => t.replace('Movie', 'Top'))} />
    </main>
  );
}