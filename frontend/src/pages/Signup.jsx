import { useState } from 'react'

function Signup({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <p className="login-label">Join StackIt</p>
        <h1>Create your account</h1>
        <p className="login-description">Create an account to ask questions and share your knowledge.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" placeholder="Your full name" required autoComplete="name" />

          <label htmlFor="signup-email">Email address</label>
          <input id="signup-email" name="email" type="email" placeholder="Enter your email" required autoComplete="email" />

          <div className="password-label">
            <label htmlFor="signup-password">Password</label>
          </div>
          <div className="password-input">
            <input id="signup-password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Create a password" minLength="8" required autoComplete="new-password" />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
          </div>

          <button className="login-button" type="submit">Create account</button>
        </form>

        <p className="login-footer">Already have an account? <button type="button" onClick={onLogin}>Login</button></p>
      </section>
    </main>
  )
}

export default Signup
