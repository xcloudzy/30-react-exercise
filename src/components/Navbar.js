import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav style={{ backgroundColor: "#242424", paddingBottom: "20px" }}>
      <nav className="navbar bg-body-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/vite.svg" alt="Bootstrap" width="30" height="24" /> React
            Project Codes
          </Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <ul className="nav nav-tabs" data-bs-theme="dark">
        <li className="nav-item">
          <Link
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            aria-current="page"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/counter" ? "active" : ""
            }`}
            to="/counter"
          >
            Counter
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/dlist" ? "active" : ""
            }`}
            to="/dlist"
          >
            DList
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/toggle" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/toggle"
          >
            Toggle
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/fetchdata" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/fetchdata"
          >
            FetchData
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/timecount" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/timecount"
          >
            TimeCount
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/userinput" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/userinput"
          >
            UserInput
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/randomquotes" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/randomquotes"
          >
            RandomQuotes
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/uploadimage" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/uploadimage"
          >
            UploadImage
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/login" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/login"
          >
            Login & Register
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/weather" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/weather"
          >
            Weather
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/search" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/search"
          >
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/colorpick" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/colorpick"
          >
            Color Picker
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/pagination" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/pagination"
          >
            Pagination
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/cart" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/tdlist" ? "active" : ""
            }`}
            aria-disabled="true"
            to="/tdlist"
          >
            TODO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// ${
//   location.pathname === "/" ? "active" : ""
// }`}

export default Navbar;