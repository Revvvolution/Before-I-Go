import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { createUser, getCreatorByEmail } from "../../services/userService.jsx"

export const Register = (props) => {

  const uuid = crypto.randomUUID()

  const [showPassword, setShowPassword] = useState(false);

  const [creator, setCreator] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    viewcode: uuid
  })
  let navigate = useNavigate()

  const registerNewCreator = () => {
    createUser(creator).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "creator_user",
          JSON.stringify({
            id: createdUser.id,
            name: createdUser.name,
            viewcode: createdUser.viewcode
          })
        )

        navigate("/")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    getCreatorByEmail(creator.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        // Good email, create user.
        registerNewCreator()
      }
    })
  }

  const updateCreator = (evt) => {
    const copy = { ...creator }
    copy[evt.target.id] = evt.target.value
    setCreator(copy)
  }
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };



  return (
    <main className="container-login" style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={handleRegister}>
        <h1>Before I Go</h1>
        <h2>Please Register</h2>
        <fieldset>
          <div className="form-group-reg">
            <input
              onChange={updateCreator}
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name (First, Last)"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group-reg">
            <input
              onChange={updateCreator}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group-reg-pass">
            <input
              onChange={updateCreator}
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
            <i 
                className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`}
                onClick={togglePasswordVisibility}
                id="togglePassword"
                ></i>
        </fieldset>
        <fieldset>
          <div className="form-group-reg">
            <button className="login-btn btn-info" type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  )
}