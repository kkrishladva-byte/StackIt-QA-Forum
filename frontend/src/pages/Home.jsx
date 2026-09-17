import Navbar from '../components/Navbar'

const questions = [
  {
    title: 'How to handle async data fetching in React without useEffect?',
    excerpt:
      'I am trying to load user data on mount and update the UI once the API returns. What is the cleanest pattern to avoid stale state and repeated requests?',
    tags: ['react', 'fetching', 'async'],
    votes: 128,
    answers: 18,
    views: 2400,
    author: 'Aarav P.',
    time: 'asked 2 mins ago',
  },
  {
    title: 'Best way to structure a large Node.js backend project?',
    excerpt:
      'We are scaling a service with multiple modules, controllers, middleware, and utilities. Should we keep everything in one app folder or split by feature?',
    tags: ['nodejs', 'architecture', 'backend'],
    votes: 96,
    answers: 12,
    views: 1800,
    author: 'Nisha K.',
    time: 'asked 12 mins ago',
  },
  {
    title: 'Why does my CSS grid not align items vertically in Safari?',
    excerpt:
      'My layout works in Chrome but behaves differently in Safari. I suspect it is related to min-height or align-items behavior across browsers.',
    tags: ['css', 'grid', 'browser'],
    votes: 74,
    answers: 9,
    views: 1200,
    author: 'Rohan S.',
    time: 'asked 39 mins ago',
  },
]

const popularTags = ['javascript', 'react', 'nodejs', 'css', 'database', 'api', 'design']

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <main className="home-shell">
        <aside className="sidebar left-sidebar">
          <div className="sidebar-card">
            <h3>Community</h3>
            <ul>
              <li className="active">Questions</li>
              <li>Tags</li>
              <li>Users</li>
              <li>Badges</li>
            </ul>
          </div>

          <div className="sidebar-card">
            <h3>Hot Topics</h3>
            <ul>
              <li>#react</li>
              <li>#frontend</li>
              <li>#database</li>
              <li>#career</li>
            </ul>
          </div>
        </aside>

        <section className="content-panel">
          <div className="topbar">
            <div>
              <p className="eyebrow">Top questions</p>
              <h1>Questions for you</h1>
            </div>
            <button className="ask-btn">Ask Question</button>
          </div>

          <div className="question-list">
            {questions.map((question) => (
              <article className="question-card" key={question.title}>
                <div className="vote-box">
                  <span>{question.votes}</span>
                  <small>votes</small>
                  <span>{question.answers}</span>
                  <small>answers</small>
                  <span>{question.views}</span>
                  <small>views</small>
                </div>

                <div className="question-body">
                  <h2>{question.title}</h2>
                  <p>{question.excerpt}</p>

                  <div className="question-meta">
                    <div className="tags">
                      {question.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>

                    <div className="user-meta">
                      <div className="avatar">{question.author.charAt(0)}</div>
                      <span>{question.author}</span>
                      <small>{question.time}</small>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="sidebar right-sidebar">
          <div className="sidebar-card">
            <h3>Popular Tags</h3>
            <div className="tag-cloud">
              {popularTags.map((tag) => (
                <span key={tag} className="tag soft-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-card stats-card">
            <h3>StackIt Stats</h3>
            <div className="stats-row">
              <strong>12k+</strong>
              <span>questions</span>
            </div>
            <div className="stats-row">
              <strong>8k+</strong>
              <span>answers</span>
            </div>
            <div className="stats-row">
              <strong>24k+</strong>
              <span>members</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default Home
