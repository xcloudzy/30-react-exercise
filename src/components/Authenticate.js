import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Authenticate() {
  const { user, login, logout } = useAuth();
  const [copy, setCopy] = useState("");
  const codeString = `//Auth Js

import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Authenticate() {
  const { user, login, logout } = useAuth();

  return (
    <>
      <div>
        <h1>User Authentication Using useContext()</h1>
        {user ? (
          <div>
            <h2>Welcome, {user.username}</h2>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => login({ username: "user123" })}>Login</button>
        )}
      </div>
    </>
  );
}
  
  //Auth Context 

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
`;

  return (
    <>
      <div>
        <h1>User Authentication Using useContext()</h1>
        {user ? (
          <div>
            <h2>Welcome, {user.username}</h2>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => login({ username: "user123" })}>Login</button>
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
            minWidth: "40%",
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
}
