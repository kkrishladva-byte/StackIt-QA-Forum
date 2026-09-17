import { useState } from 'react'

function Login({ onSignup }) {
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <p className="login-label">Welcome to StackIt</p>
        <h1>Login to your account</h1>
        <p className="login-description">Ask questions, share knowledge, and learn with the community.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="Enter your gmail" required autoComplete="email" />

          <div className="password-label">
            <label htmlFor="password">Password</label>
          </div>
          <div className="password-input">
            <input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" required autoComplete="current-password" />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
          </div>

          <label className="remember-me"><input type="checkbox" /> Remember me</label>
          <button className="login-button" type="submit">Login</button>
        </form>

        <p className="login-footer">New to StackIt? <button type="button" onClick={onSignup}>Create an account</button></p>
      </section>
    </main>
  )
}

export default Login
