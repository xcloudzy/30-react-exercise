import viteLogo from "./vite.svg";
import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ backgroundColor: "#242424", color: "white" }}>
      <div>
        <Link to="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link to="https://react.dev" target="_blank"></Link>
      </div>
      <h1>30 ReactJs Questions</h1>

      <p className="read-the-docs">Click on the Vite logos to learn more</p>
    </div>
  );
}

export default Home;
