
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
            <div className="container">
                {/* Brand Logo */}
                <a className="navbar-brand fw-bold fs-4" href="#">
                    skill<span className="text-primary">Bridge</span>
                </a>

                {/* Mobile Toggler */}
                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links & Action Buttons */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-medium">
                        <li className="nav-item">
                            <a className="nav-link active text-primary" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#jobs">
                                Browse Jobs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact Us
                            </a>
                        </li>
                    </ul>

                    {/* Action CTAs */}
                    <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
                        <a href="#post-job" className="btn btn-outline-primary px-3">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;