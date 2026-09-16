import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Stack<span>It</span>
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/questions">Questions</a>
          <a href="/tags">Tags</a>
        </div>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">

        <div className="hero-section">
          <h1>Questions & Answers</h1>

          <p>
            Ask questions, share knowledge, and help others
            solve their problems.
          </p>

          <button className="ask-btn">
            Ask Question
          </button>
        </div>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search questions..."
          />

          <button>Search</button>
        </div>

        {/* Questions */}
        <section className="questions-section">

          <div className="section-header">
            <h2>Latest Questions</h2>
            <span>3 Questions</span>
          </div>

          <div className="question-card">

            <h3>
              How can I connect React.js with Node.js?
            </h3>

            <p>
              I am building a full-stack application and want
              to connect my React frontend with a Node.js backend.
            </p>

            <div className="tags">
              <span>react</span>
              <span>nodejs</span>
              <span>javascript</span>
            </div>

            <div className="question-info">
              <span>👍 12 votes</span>
              <span>💬 5 answers</span>
              <span>Asked by Krish</span>
            </div>

          </div>

          <div className="question-card">

            <h3>
              What is the difference between SQL and MongoDB?
            </h3>

            <p>
              Can someone explain the main differences between
              SQL databases and MongoDB?
            </p>

            <div className="tags">
              <span>mongodb</span>
              <span>sql</span>
              <span>database</span>
            </div>

            <div className="question-info">
              <span>👍 8 votes</span>
              <span>💬 3 answers</span>
              <span>Asked by User</span>
            </div>

          </div>

        </section>

      </main>

    </div>
  )
}

export default App

