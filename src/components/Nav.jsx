import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <img src="/src/assets/nc-logo.png" alt="Northcoders logo" className="d-inline-block align-text-top"/>
            <Link to="/" className="navbar-brand">NC News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to='/' className="nav-link active">Home</Link>
                </li>
                <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Articles
                </Link>
                <ul className="dropdown-menu">
                    <li><Link to="/articles" className="dropdown-item" href="#">All</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                </ul>
                </li>
                <li className="nav-item">
                <Link to="#" className="nav-link disabled">Log in/Sign up</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Nav