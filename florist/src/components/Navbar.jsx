
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

                <a className="navbar-brand" href="#">
                    Florist
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Roses</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Bouquets</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Plants</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Gifts</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Location</a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
