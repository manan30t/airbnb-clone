export default function Header() {
  return (
    <header className="hdr">
      <a className="logo" href="/" aria-label="airbnb home">airbnb</a>
      <div className="pill"><button>Anywhere</button><button>Anytime</button><button className="dim">Add guests</button>
        <span className="go" aria-hidden="true">⌕</span></div>
      <nav className="hr"><a href="#host">Become a host</a><button className="round" aria-label="Language">◍</button><button className="round" aria-label="Menu">≡</button></nav>
    </header>
  );
}
