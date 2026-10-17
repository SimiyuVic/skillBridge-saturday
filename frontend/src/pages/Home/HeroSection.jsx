import { FaCheckCircle } from "react-icons/fa";


const HeroSection = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    {/* Left */}
                    <div className="col-md-6">
                        <h1 className="display-4">
                            Shaping your <br /> future with the <br /> best recruitment
                        </h1>
                        <p className="my-2 fs-5 text-muted">
                            Growth and success go hand in hand. <br />
                            We'll help you with it.Focus to get your dream job
                        </p>
                        <div className="input-group input-group-sm w-50">
                            <input type="text" className="form-control " />
                            <button className="btn btn-primary">Get Notification</button>
                        </div>
                        {/* Icons */}
                        <div className="mt-3">
                            <h6>
                               <span className="text-primary me-2"> <FaCheckCircle /> </span> Update Everyday
                            </h6>
                            <h6>
                              <span className="text-primary me-2"> <FaCheckCircle /> </span>  Easy Application from email
                            </h6>
                            <h6>
                              <span className="text-primary me-2"> <FaCheckCircle /> </span>  Land your job
                            </h6>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="col-md-6">
                        <img
                            src="images/HeroImage.jpg"
                            alt="job-search-image"
                            style={{
                                width: "100%",
                                height: "400px",
                                objectFit: "cover"
                            }}
                            className="rounded-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;