import logo from "./assets/logo.png"; // Ensure this matches where you save the new logo

/* ─────────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --blue: #0E5A97; --blue-dark: #0A4372; --blue-dim: rgba(14, 90, 151, 0.12);
  --orange: #F97316; --orange-dark: #EA580C; --orange-dim: rgba(249, 115, 22, 0.12);
  --bg: #F8FAFC; --surface: #FFFFFF; --surface2: #F1F5F9;
  --border: #E2E8F0; --border-blue: rgba(14, 90, 151, 0.25);
  --text: #0F172A; --text-muted: #475569; --text-dim: #64748B;
  --green: #10B981; 
  --radius: 16px; --radius-sm: 10px;
}
body { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--text); overflow-x: hidden; scroll-behavior: smooth; }

/* BACKGROUND ORBS */
.bg-layer { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
.orb { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.15; }
.orb-1 { width: 600px; height: 600px; background: var(--blue); top: -200px; right: -100px; animation: float 14s ease-in-out infinite; }
.orb-2 { width: 500px; height: 500px; background: var(--orange); bottom: -150px; left: -150px; animation: float 17s ease-in-out infinite reverse; }

@keyframes float { 
  0%, 100% { transform: translate(0, 0) scale(1); } 
  50% { transform: translate(-30px, 30px) scale(1.05); } 
}

/* NAVIGATION */
.nav {
  position: fixed; top: 0; width: 100%; z-index: 100;
  background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  height: 70px; padding: 0 40px;
  display: flex; align-items: center; justify-content: space-between;
}
.nav-logo { display: flex; align-items: center; gap: 12px; }
.nav-logo img { height: 36px; object-fit: contain; }
.nav-logo-text { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 20px; color: var(--blue); letter-spacing: -0.5px; }
.nav-links { display: flex; gap: 24px; }
.nav-link { color: var(--text-muted); text-decoration: none; font-size: 14px; font-weight: 600; transition: color 0.2s; cursor: pointer; }
.nav-link:hover { color: var(--blue); }

/* BUTTONS */
.btn { border: none; border-radius: var(--radius-sm); cursor: pointer; font-family: 'DM Sans', sans-serif; font-weight: 600; transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; gap: 8px; }
.btn-primary { background: linear-gradient(135deg, var(--orange), var(--orange-dark)); color: #fff; box-shadow: 0 4px 14px rgba(249, 115, 22, 0.3); padding: 12px 24px; font-size: 14px; }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(249, 115, 22, 0.4); }
.btn-outline { background: transparent; border: 2px solid var(--blue); color: var(--blue); padding: 10px 24px; font-size: 14px; }
.btn-outline:hover { background: var(--blue-dim); }

/* LAYOUT & SECTIONS */
.container { max-width: 1100px; margin: 0 auto; padding: 120px 20px 60px; position: relative; z-index: 1; }
section { margin-bottom: 100px; }
.section-title { font-family: 'Sora', sans-serif; font-weight: 800; font-size: 32px; margin-bottom: 16px; text-align: center; color: var(--blue-dark); }
.section-subtitle { font-size: 16px; color: var(--text-muted); text-align: center; max-width: 700px; margin: 0 auto 40px; line-height: 1.6; }

/* HERO */
.hero { text-align: center; padding: 40px 0 60px; }
.hero-badge { display: inline-block; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; color: var(--orange-dark); background: var(--orange-dim); border: 1px solid rgba(249, 115, 22, 0.2); margin-bottom: 24px; text-transform: uppercase; letter-spacing: 1px; }
.hero h1 { font-family: 'Sora', sans-serif; font-weight: 800; font-size: clamp(36px, 6vw, 56px); line-height: 1.15; margin-bottom: 20px; color: var(--blue-dark); }
.hero h1 span { background: linear-gradient(135deg, var(--orange), #FBBF24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hero p { font-size: 18px; color: var(--text-muted); max-width: 600px; margin: 0 auto 32px; line-height: 1.6; }
.hero-actions { display: flex; justify-content: center; gap: 16px; }

/* VISUAL / MEDIA BOX */
.media-box { background: var(--surface); border: 1px solid var(--border); border-radius: 24px; padding: 8px; box-shadow: 0 20px 40px rgba(14, 90, 151, 0.08); margin-top: 40px; }
.media-placeholder { background: var(--surface2); border-radius: 16px; aspect-ratio: 16/9; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px dashed var(--border-blue); color: var(--text-dim); }
.play-btn { width: 64px; height: 64px; border-radius: 50%; background: var(--blue); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; cursor: pointer; transition: transform 0.2s; box-shadow: 0 8px 16px rgba(14, 90, 151, 0.3); }
.play-btn:hover { transform: scale(1.1); }
.play-btn svg { fill: #fff; width: 24px; height: 24px; margin-left: 4px; }

/* FEATURES GRID */
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
.feature-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 32px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
.feature-card:hover { border-color: var(--blue); transform: translateY(-4px); box-shadow: 0 12px 24px rgba(14, 90, 151, 0.08); }
.feature-icon { width: 48px; height: 48px; border-radius: 12px; background: var(--blue-dim); color: var(--blue); display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px; }
.feature-title { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 18px; margin-bottom: 12px; color: var(--blue-dark); }
.feature-desc { color: var(--text-muted); font-size: 14px; line-height: 1.6; }

/* CONTACT SECTION */
.contact-card { background: linear-gradient(135deg, #1E293B, #0F172A); color: #fff; border-radius: var(--radius); padding: 56px 40px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.contact-card h3 { font-family: 'Sora', sans-serif; font-size: 28px; margin-bottom: 12px; }
.contact-card p { color: #94A3B8; margin-bottom: 40px; max-width: 500px; margin-left: auto; margin-right: auto; line-height: 1.6; }
.team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 40px; }
.team-member { padding: 16px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; text-align: left; }
.team-name { font-weight: 700; font-size: 15px; margin-bottom: 4px; color: #fff; }
.team-role { font-size: 12px; color: var(--orange); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
`;

export default function SkillSyncLandingPage() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{CSS}</style>
      <div className="bg-layer">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>

      {/* NAVBAR */}
      <nav className="nav">
        <div className="nav-logo">
          {/* Assuming your logo includes the text, or we can place it beside the icon */}
          <img src={logo} alt="Skill-Sync Logo" />
        </div>
        <div className="nav-links">
          <span className="nav-link" onClick={() => scrollTo("solution")}>How it Works</span>
          <span className="nav-link" onClick={() => scrollTo("features")}>The Platform</span>
          <span className="nav-link" onClick={() => scrollTo("contact")}>Our Team</span>
        </div>
      </nav>

      <main className="container">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-badge">Cabuyao's Local Talent Ecosystem</div>
          <h1>
            Connect Local Talent. <br />
            <span>Grow Your Business.</span>
          </h1>
          <p>
            A hyper-local freelance marketplace matching Cabuyao's MSMEs with pre-vetted student talent for micro-projects. Get tasks done quickly while helping students build real-world experience.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo("solution")}>See How It Works</button>
            <button className="btn btn-outline" onClick={() => scrollTo("contact")}>Partner With Us</button>
          </div>

          {/* VISUAL / VIDEO PLACEHOLDER */}
          <div id="solution" className="media-box">
            <div className="media-placeholder">
              <div className="play-btn">
                <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 8, color: "var(--blue-dark)" }}>
                Watch the Skill-Sync Platform Demo
              </div>
              <div>(Insert promotional video or animated infographic here)</div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features">
          <h2 className="section-title">Why Skill-Sync?</h2>
          <p className="section-subtitle">
            Existing global platforms are too complex and expensive. We provide a trusted, localized solution built specifically for the needs of our community.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3 className="feature-title">Frictionless MSME Access</h3>
              <p className="feature-desc">
                Local employers bypass expensive recruitment hurdles. Access a pre-vetted pool of student talent for quick, project-based tasks like digital marketing, technical repairs, or design.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Learn-As-You-Earn Model</h3>
              <p className="feature-desc">
                Students bridge the skills gap by taking on targeted "micro-projects". Every task completed builds a verified digital portfolio, ensuring they are workforce-ready upon graduation.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3 className="feature-title">Data-Driven Ecosystem</h3>
              <p className="feature-desc">
                Our matching algorithm connects specific MSME pain points with emerging student competencies, while providing EdTech partners with valuable "Skills Gap" data insights.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT & TEAM SECTION */}
        <section id="contact">
          <div className="contact-card">
            <h3>Meet the Executive Team</h3>
            <p>We are a dedicated group of innovators building the future of local workforce integration in Cabuyao.</p>
            
            <div className="team-grid">
              <div className="team-member">
                <div className="team-name">Theresa Mae E. Marilao</div>
                <div className="team-role">Chief Executive Officer (CEO)</div>
              </div>
              <div className="team-member">
                <div className="team-name">Christian Benedict E. Abania</div>
                <div className="team-role">Chief Operating Officer (CTO)</div>
              </div>
              <div className="team-member">
                <div className="team-name">Angel Mae P. Garcia</div>
                <div className="team-role">Chief Financial Officer (CFO)</div>
              </div>
              <div className="team-member">
                <div className="team-name">Ryzza Miel E. Damian</div>
                <div className="team-role">Chief Growth Officer (CGO/CMO)</div>
              </div>
            </div>

            <button className="btn btn-primary" style={{ padding: "14px 32px", fontSize: "16px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contact Skill-Sync
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
