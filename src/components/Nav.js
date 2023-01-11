import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
  const cart = useSelector((state) => state.cart);
  //  const dispatch = useDispatch();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/react-products">
                  Home
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link className="nav-link" to="/react-products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  cart - {cart.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
