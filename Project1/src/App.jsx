import { useEffect, useState } from 'react';
import './App.css';
import challengerScreenshot from './assets/challenger.png';

const links = {
  email: 'chen.tavish@gmail.com', 
  linkedin: 'https://www.linkedin.com/in/tavish-chen/', 
  resume: '/resume.pdf', 
};

const experience = [
  {
    company: 'Do One Technologies',
    role: 'Software Engineer Intern',
    location: 'New York, NY',
    dates: 'Aug 2025 - Dec 2026',
  },
  {
    company: '88 BaoBao',
    role: 'Operations & Systems',
    location: 'Concord, CA',
    dates: 'Sep 2023 – Jul 2025',
  },
  {
    company: 'Lockheed Martin',
    role: 'Systems Engineer Intern',
    location: 'Owego, NY',
    dates: 'June 2023 - Sept 2023',
  },
  {
    company: 'Con Edison',
    role: 'Software Engineer Intern',
    location: 'New York, NY',
    dates: 'May 2022 - Dec 2022',
  },
];


const education = [
  {
    school: 'College of Staten Island, CUNY',
    degree: 'B.S. in Computer Science',
    dates: 'Expected December 2026',
  },
  {
    school: 'Rochester Institute of Technology',
    degree: 'B.S. in Computer Engineering Technology, minor in Software Engineering',
    dates: '2018 – 2023',
  },
];

function getInitialTheme() {
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

function Points({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="entry-points">
      {items.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}

function Tags({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="tags">
      {items.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <div>
      <nav className="nav" aria-label="Main">
        <a href="#home" className="nav-brand">Tavish Chen</a>
        <div className="nav-right">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#Hobbies">Hobbies</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-pressed={theme === 'dark'}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <h1>Tavish Chen</h1>
          <p>Computer Science senior at CUNY College of Staten Island, graduating December 2026.</p>
          <div className="button-row">
            <a href="#experience" className="cta-button">View experience</a>
            <a href={links.resume} className="cta-button secondary" target="_blank" rel="noreferrer">
              View resume
            </a>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="section-inner">
            <h2 className="section-title">About</h2>
            <p>
            My name is Tavish Chen, and I'm a senior studying Computer Science at the College of Staten Island (CUNY). 
            I previously earned a B.S. in Computer Engineering Technology from the Rochester Institute of Technology. 
            In my free time, I like staying active by going to the gym, hiking, and running, and I also enjoy playing video games. 
            I'm currently looking for new grad roles in software engineering, machine learning, or product management, starting after I graduate in December 2026.
            </p>
          </div>
        </section>

        <section id="experience">
          <div className="section-inner">
            <h2 className="section-title">Experience</h2>
            <ol className="timeline">
              {experience.map((job) => (
                <li key={job.company} className="timeline-item">
                  <div className="entry-header">
                    <h3 className="entry-title">{job.company}</h3>
                    <span className="entry-meta">{job.dates}</span>
                  </div>
                  <div className="entry-header">
                    <span className="entry-sub">{job.role}</span>
                    {job.location && <span className="entry-meta">{job.location}</span>}
                  </div>
                  <Points items={job.points} />
                  <Tags items={job.tags} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="education">
          <div className="section-inner">
            <h2 className="section-title">Education</h2>
            <div className="education-grid">
              {education.map((item) => (
                <div key={item.school}>
                  <h3 className="entry-title">{item.school}</h3>
                  <p className="entry-sub">{item.degree}</p>
                  <p className="entry-meta">{item.dates}</p>
                  {item.details && <p className="entry-details">{item.details}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="Hobbies" className="hobbies-section">
          <div className="section-inner">
            <h2 className="section-title">Hobbies</h2>
            <div className="rank-showcase">
              <img
                src={challengerScreenshot}
                alt="In-game notification announcing promotion to Challenger in Ranked Teamfight Tactics"
                className="rank-screenshot"
              />
              <div className="rank-card">
                <p className="game">Teamfight Tactics</p>
                <div className="tier-badge tier-challenger">Challenger</div>
                <h3>Peak Rank</h3>
                <p className="lp">1072 LP</p>
                <p className="rank-note">Top 150 on the NA ranked ladder</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2 className="section-title">Contact</h2>
          <p>Want to talk? Send me an email or connect on LinkedIn.</p>
          <div className="button-row">
            <a href={`mailto:${links.email}`} className="cta-button">Email me</a>
            <a href={links.linkedin} className="cta-button secondary" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Tavish Chen</footer>
    </div>
  );
}

export default App;