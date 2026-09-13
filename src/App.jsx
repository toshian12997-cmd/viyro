import { useEffect, useState } from 'react';

const LOADER_MS = 12000;

function VMark() {
  return (
    <div className="v-mark" aria-label="Vero">
      <span className="v-left" />
      <span className="v-right" />
      <span className="v-dot" />
    </div>
  );
}

function Briefcase() {
  return (
    <div className="briefcase-wrap" aria-hidden="true">
      <div className="briefcase-handle" />
      <div className="briefcase">
        <div className="briefcase-lock" />
        <div className="briefcase-line" />
      </div>
    </div>
  );
}

function Businessman() {
  return (
    <div className="businessman" aria-hidden="true">
      <div className="head" />
      <div className="neck" />
      <div className="body">
        <div className="shirt" />
        <div className="tie" />
        <div className="jacket-logo">V</div>
      </div>
      <div className="arm arm-left" />
      <div className="arm arm-right" />
      <div className="leg leg-left" />
      <div className="leg leg-right" />
      <Briefcase />
    </div>
  );
}

function LoginPreview() {
  return (
    <section className="login-preview" aria-label="Vero sign in">
      <div className="login-card glass">
        <div className="mini-brand"><VMark /><span>Vero</span></div>
        <h1>Welcome back</h1>
        <p>Sign in to continue to your business workspace.</p>
        <div className="fake-input">Email or phone</div>
        <div className="fake-input">Password <span>••••••••</span></div>
        <button type="button">Continue</button>
        <div className="login-foot">Secure access · Private workspace</div>
      </div>
    </section>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener?.('change', update);

    const timer = window.setTimeout(() => setLoaded(true), reducedMotion ? 500 : LOADER_MS);
    return () => {
      window.clearTimeout(timer);
      media.removeEventListener?.('change', update);
    };
  }, [reducedMotion]);

  return (
    <main className={`app ${loaded ? 'is-loaded' : ''}`}>
      <section className="loader" aria-hidden={loaded}>
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <div className="loader-content">
          <div className="logo-stage">
            <div className="v-glow" />
            <VMark />
            <Businessman />
          </div>
          <div className="loader-copy">
            <div className="wordmark">Vero</div>
            <p>Business, made clearer.</p>
          </div>
          <div className="progress-track"><span /></div>
        </div>
      </section>

      <LoginPreview />
    </main>
  );
}
