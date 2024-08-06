import { useState } from "react"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistered, setIsRegistered] = useState(false)
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [users, setUsers] = useState([])

    const handleAuthentication = () => {

        if (email === "" || password === "") {
            alert("Please fill the form Correctly")
        } else {
            if (isRegistered) {
                if (isRegistered) {
                    const user = users.find((u) => u.email === email && u.password === password)
                    if (user) {
                        setLoggedIn(true)
                    } else {
                        alert('Invalid Credentials')
                    }
                }
            } else {
                const newUser = { email, password }
                setUsers([...users, newUser])
                localStorage.setItem('users', JSON.stringify([...users, newUser]))
                setLoggedIn(true)
            }
        }
    }
    const handleLogout = () => {

        setLoggedIn(false)
        setEmail('')
        setPassword('')
    }

    return (
        <div className="container" style={{ color: "white" }}>{
            isLoggedIn ? (
                <div>
                    <h2>
                        Welcome , {email}!
                    </h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (

                <div >
                    <h2>{isRegistered ? "Login" : "Register"}</h2>
                    <form className="d-flex" role="search" style={{ color: "white", marginLeft: "30%", width: "100%" }} >
                        <input className="form-control bg-body-dark" data-bs-theme="dark" style={{ width: "20%" }} type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                        <input className="form-control bg-body-dark" data-bs-theme="dark" style={{ width: "20%" }} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleAuthentication}>{isRegistered ? "login" : 'Register'}</button>
                    </form>
                    <p>
                        {isRegistered ? "Don't Have an Account ? Register Now" : "Already Have an Account ? Log in"}
                    </p>
                    <button onClick={() => setIsRegistered(!isRegistered)}>
                        {isRegistered ? "Register" : "Login"}
                    </button>
                </div>
            )
        }</div>
    )
}

export default Login