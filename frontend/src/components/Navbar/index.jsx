import './navbar.css'; 

const Navbar = () => {
    return (
        <header>
            <div className="top_header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <a href="/">
                                <img
                                    src="/images/logo.png"
                                    width="150px"
                                    alt=""
                                    srcSet=""
                                    loading="eager"
                                />
                            </a>
                        </div>
                        <div className="col-lg-6 text-end">
                            <nav className="desktop_nav">
                                <ul>
                                    <li>
                                        <a href="/packages.html">Packages</a>
                                    </li>
                                    <li>
                                        <a href="#">Booklist</a>
                                    </li>
                                    <li>
                                        <a href="#">Edit Package</a>
                                    </li>
                                    <li>
                                        <div className="dropdown">
                                            <a
                                                className="btn dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                                    className="rounded-circle"
                                                    width="40px"
                                                    height={25}
                                                    alt="Black and White Portrait of a Man"
                                                    loading="lazy"
                                                />
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        My Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Logout
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Navbar;