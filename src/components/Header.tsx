import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <h1 className="text-center">WorkOut</h1>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <li className="nav-item">
                <Link className="nav-link" to="/Workout">
                  Workouts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AI-Trainer">
                  Ai Trainer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CalorieTracker">
                  Calorie Tracker
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Account">
                  Account
                </Link>
              </li>
            </ul>
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
        </div>
      </nav>
    </>
  );
}

export default Header;
