const DashBoardNav = () => {
    return ( 
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <h5 className="text-light">
                        Welcome Admin
                    </h5>
                    <p className="text-light">
                        Manage everything from one place.
                    </p>
                </div>
                <div>
                    <button className="btn btn-dark">
                        Logout
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default DashBoardNav;