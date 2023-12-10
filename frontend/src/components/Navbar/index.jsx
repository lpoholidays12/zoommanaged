import './navbar.css';

const pageList = [
    {
        id: 1,
        name: "Packages",
        url: "/packages"
    },
    {
        id: 2,
        name: "My Bookings",
        url: "/my-bookings"
    },
    {
        id: 1,
        name: "Edit Package",
        url: "/edit-package"
    }
]

const Navbar = () => {
    return (
        <>
            <header>
                <div className="top_header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-4">
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
                            <div className="col-lg-6 text-end col-md-8">
                                <nav className="desktop_nav">
                                    <ul>
                                        {
                                            pageList.map((item, i) => (
                                                <li key={i}>
                                                    <a href={item.url}>{item.name}</a>
                                                </li>
                                            ))
                                        }
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
            <div className="header-height">
            </div>
        </>
    );
}

export default Navbar;