export const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="text-light absolute fs-3">News Portal</span>
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <div className="d-flex btn-group mx-4">
            <button
              type="button"
              className="btn btn-light dropdown-toggle category-btn"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Category
            </button>
            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                onClick={() => setCategory("technology")}
              >
                Technology
              </a>
              <a
                className="dropdown-item"
                onClick={() => setCategory("business")}
              >
                Business
              </a>
              <a
                className="dropdown-item"
                onClick={() => setCategory("food")}
              >
                Food
              </a>
              <a
                className="dropdown-item"
                onClick={() => setCategory("fashion")}
              >
                Fashion
              </a>
              <a
                className="dropdown-item"
                onClick={() => setCategory("sports")}
              >
                Sports
              </a>
              <a
                className="dropdown-item"
                onClick={() => setCategory("theater")}
              >
                Theater
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
