import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [copy, setCopy] = useState("");
  const codeString = `import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuthentication = () => {
    if (email === "" || password === "") {
      alert("Please fill the form Correctly");
    } else {
      if (isRegistered) {
        if (isRegistered) {
          const user = users.find(
            (u) => u.email === email && u.password === password
          );
          if (user) {
            setLoggedIn(true);
          } else {
            alert("Invalid Credentials");
          }
        }
      } else {
        const newUser = { email, password };
        setUsers([...users, newUser]);
        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        setLoggedIn(true);
      }
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome , {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{isRegistered ? "Login" : "Register"}</h2>
          <form>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication}>
              {isRegistered ? "login" : "Register"}
            </button>
          </form>
          <p>
            {isRegistered
              ? "Don't Have an Account ? Register Now"
              : "Already Have an Account ? Log in"}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
`;

  const handleAuthentication = () => {
    if (email === "" || password === "") {
      alert("Please fill the form Correctly");
    } else {
      if (isRegistered) {
        if (isRegistered) {
          const user = users.find(
            (u) => u.email === email && u.password === password
          );
          if (user) {
            setLoggedIn(true);
          } else {
            alert("Invalid Credentials");
          }
        }
      } else {
        const newUser = { email, password };
        setUsers([...users, newUser]);
        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        setLoggedIn(true);
      }
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="container" style={{ color: "white" }}>
        {isLoggedIn ? (
          <div>
            <h2>Welcome , {email}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>{isRegistered ? "Login" : "Register"}</h2>
            <form
              className="d-flex"
              role="search"
              style={{ color: "white", marginLeft: "30%", width: "100%" }}
            >
              <input
                className="form-control bg-body-dark"
                data-bs-theme="dark"
                style={{ width: "20%" }}
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form-control bg-body-dark"
                data-bs-theme="dark"
                style={{ width: "20%" }}
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleAuthentication}>
                {isRegistered ? "login" : "Register"}
              </button>
            </form>
            <p>
              {isRegistered
                ? "Don't Have an Account ? Register Now"
                : "Already Have an Account ? Log in"}
            </p>
            <button onClick={() => setIsRegistered(!isRegistered)}>
              {isRegistered ? "Register" : "Login"}
            </button>
          </div>
        )}
      </div>
      <div
        className="mt-4"
        style={{
          display: "flex",
          textAlign: "start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            minWidth: "50%",
            backgroundColor: "#29344A",
            borderRadius: "10px",
          }}
        >
          <div className="d-flex justify-content-between px-4 text-white text-xs align-items-center">
            <p className="text-sm mt-3 ">Example Code</p>
            {copy ? (
              <button
                style={{ backgroundColor: "#29344A", outline: "none" }}
                className="mt-2 d-inline-flex align-items-center gap-1 mb-2"
              >
                <span className="text-base mt-1">
                  <ion-icon name="clipboard"></ion-icon>
                </span>
                Copied!
              </button>
            ) : (
              <button
                className="mt-2 d-inline-flex align-items-center gap-1 mb-2"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 2000);
                }}
              >
                <span className="text-base mt-1">
                  <ion-icon name="clipboard"></ion-icon>
                </span>
                Copy Code
              </button>
            )}
          </div>
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            customStyle={{
              padding: "25px",
              height: "100",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              marginBottom: 0,
            }}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default Login;
