import './App.css';

function App() {
  return (
    <div>
      <nav className="nav">
        <strong>BUJ1</strong>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#achievements">Achievements</a></li>
        </ul>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <h1>Tavish Chen</h1>
          <p className="handle">buj1</p>
          <p>Teamfight Tactics player.</p>
          <a href="#achievements" className="cta-button">View Achievements</a>
        </section>

        <section id="about" className="about-section">
          <h2>About Me</h2>
          <p>
            Hi 
          </p>
        </section>

        <section id="achievements" className="achievements-section">
          <h2>Achievements</h2>
          <div className="rank-card">
            <div className="tier-badge tier-challenger">Challenger</div>
            <h3>Peak Rank</h3>
            <p className="lp">1072 LP</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
