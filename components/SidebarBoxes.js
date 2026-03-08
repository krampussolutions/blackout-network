export default function SidebarBoxes() {
  return (
    <aside className="sidebar">
      <div className="buy-box">
        <span className="badge">Our approach</span>
        <h3>How we recommend gear</h3>
        <p className="muted" style={{ lineHeight: 1.7 }}>
          We prioritize realistic home preparedness, blackout readiness, and practical off-grid utility over hype.
        </p>
        <a className="button" href="#top-picks">See top picks</a>
      </div>
      <div className="panel">
        <h3>Start here</h3>
        <ul>
          <li>Cover light, water, communication, and charging first.</li>
          <li>Buy for your most likely emergency scenario.</li>
          <li>Upgrade weak points after the basics are covered.</li>
        </ul>
      </div>
    </aside>
  );
}
