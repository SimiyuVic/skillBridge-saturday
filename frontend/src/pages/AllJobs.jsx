import JobCards from "../components/JobCards.jsx";
import useFetch from "../hook/useFetch.js";

const AllJobsPage = () => {

    const { allData: jobs, error, loading } = useFetch("http://localhost:3000/jobs");

    return ( 
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm p-3">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="company" className="mb-2">
                                        Search by Company Name or Job Title
                                    </label>
                                    <input 
                                     type="text"
                                     className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="company" className="mb-2">
                                        Search by Location
                                    </label>
                                    <input 
                                     type="text"
                                     className="form-control"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <JobCards allJobs={jobs} />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AllJobsPage;