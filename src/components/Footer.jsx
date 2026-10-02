
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light pt-5 pb-4 mt-auto">
            <div className="container">
                <div className="row g-4">
                    {/* Brand & Mission */}
                    <div className="col-12 col-md-4 col-lg-3">
                        <h5 className="fw-bold mb-3">
                            skill<span className="text-primary">Bridge</span>
                        </h5>
                        <p className="text-secondary small mb-3">
                            Connecting top talent with great opportunities. Whether you need a job or skilled professionals, we've got you covered.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div className="col-6 col-md-2 offset-lg-1">
                        <h6 className="text-uppercase fw-bold text-primary mb-3">Product</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><a href="#remote-jobs" className="text-secondary text-decoration-none">Remote Jobs</a></li>
                            <li className="mb-2"><a href="#contracts" className="text-secondary text-decoration-none">Contract</a></li>
                            <li className="mb-2"><a href="#tasks" className="text-secondary text-decoration-none">Tasks</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="col-6 col-md-2">
                        <h6 className="text-uppercase fw-bold text-primary mb-3">Company</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><a href="#about" className="text-secondary text-decoration-none">About Us</a></li>
                            <li className="mb-2"><a href="#contact" className="text-secondary text-decoration-none">Contact Us</a></li>
                            <li className="mb-2"><a href="#career-tips" className="text-secondary text-decoration-none">Career Tips</a></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="col-6 col-md-2">
                        <h6 className="text-uppercase fw-bold text-primary mb-3">Resources</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><a href="#faq" className="text-secondary text-decoration-none">FAQ</a></li>
                            <li className="mb-2"><a href="#privacy" className="text-secondary text-decoration-none">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#support" className="text-secondary text-decoration-none">Support</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider & Copyright */}
                <hr className="my-4 border-secondary opacity-25" />
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                        <p className="text-secondary small mb-0">
                            &copy; {currentYear} skillBridge. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;