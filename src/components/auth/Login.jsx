import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getCreatorByEmail } from "../../services/userService.jsx"

export const Login = () => {
  const [email, set] = useState("Jerome.Johnson62@example.com")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    getCreatorByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "creator_user",
          JSON.stringify({
            id: user.id,
            name: user.name,
            viewcode: user.viewcode
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <main className="container-login">
      <section>
        <div className="header-container-login">
              <figure className="site-logo-login-container">
                <img className="site-logo-login" src="src\images\BeforeIGo_logo.png" alt="Site Logo" />
              </figure>
            <h2>Digital Family Memory Platform</h2>
        </div>
        <form className="form-login" onSubmit={handleLogin}>
          <fieldset>
          <h2>Please Sign in</h2>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
              <input
                type="email"
                value={email}
                onChange={(evt) => set(evt.target.value)}
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
            <div className="form-group">
              <button className="login-btn btn-info" type="submit">
                Sign in
              </button>
            </div>
          </fieldset>         
        </form>
      </section>
      <section className="register-txt">
        <span>New User? <Link className="reg-link" to="/register">Register</Link></span>
      </section>
    </main>
  )
}
