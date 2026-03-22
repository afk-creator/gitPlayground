function Header() {
  return (
    <header style={{ background: '#1e1e2e', color: 'white', padding: '1rem 2rem' }}>
      <h1>My App</h1>
      <nav>
        <a href="/" style={{ color: 'white', marginRight: '1rem' }}>Home</a>
        <a href="/about" style={{ color: 'white' }}>About</a>
      </nav>
    </header>
  )
}

export default Header
