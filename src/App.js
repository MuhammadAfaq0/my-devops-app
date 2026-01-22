import './App.css';

function App() {
  return (
    <div className="netflix">
      <header className="netflix-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" className="netflix-logo" />
        <nav className="netflix-nav">
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
        </nav>
        <button className="sign-in">Sign In</button>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Stranger Things</h1>
            <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.</p>
            <div className="buttons">
              <button className="play">Play</button>
              <button className="more-info">More Info</button>
            </div>
          </div>
        </section>
        <section className="row">
          <h2>Trending Now</h2>
          <div className="thumbnails">
            <img src="https://via.placeholder.com/200x300/000000/FFFFFF?text=Movie1" alt="Movie 1" />
            <img src="https://via.placeholder.com/200x300/000000/FFFFFF?text=Movie2" alt="Movie 2" />
            <img src="https://via.placeholder.com/200x300/000000/FFFFFF?text=Movie3" alt="Movie 3" />
            <img src="https://via.placeholder.com/200x300/000000/FFFFFF?text=Movie4" alt="Movie 4" />
            <img src="https://via.placeholder.com/200x300/000000/FFFFFF?text=Movie5" alt="Movie 5" />
          </div>
        </section>
        <section className="row">
          <h2>Top Rated</h2>
          <div className="thumbnails">
            <img src="https://via.placeholder.com/200x300/000000/FFFFFF?text=Top1" alt="Top 1" />
            <img src="https://via.placeholder.com/200x300/000000/FFFFFF?text=Top2" alt="Top 2" />
            <img src="https://via.placeholder.com/200x300/000000/FFFFFF?text=Top3" alt="Top 3" />
            <img src="https://via.placeholder.com/200x300/000000/FFFFFF?text=Top4" alt="Top 4" />
            <img src="https://via.placeholder.com/200x300/000000/FFFFFF?text=Top5" alt="Top 5" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
