function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a className="nav-brand" href="#home">StackIt</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#ask-question">Ask Question</a>
          <a href="#tags">Tags</a>
        </div>
      </div>

      <label className="search-box">
        <span aria-hidden="true">⌕</span>
        <input type="search" placeholder="Search" aria-label="Search questions" />
      </label>

      <div className="nav-actions">
        <a className="profile-link" href="#profile">Profile</a>
        <button type="button" className="nav-logout">Log out</button>
      </div>
    </nav>
  )
}

export default Navbar
