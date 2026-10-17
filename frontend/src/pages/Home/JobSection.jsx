
import JobCards from "../../components/JobCards";
import useFetch from "../../hook/useFetch.js";

const JobSection = () => {

   const {allData: jobs, error, loading } = useFetch("http://localhost:3000/jobs");

    return (
        <div>
            <div className="container my-3">
                <h4 className="text-center">
                    Latest <span className="border-bottom border-primary border-3">Job</span> Vacancies
                </h4> 
                <p className="text-center">
                    We have a wide range of jobs, click one to apply
                </p>
                {error && <div className="text-danger fw-bold"> { error} </div>}
                {loading && <div className="text-success fw-bold">Loading Jobs . . . </div> }
                <JobCards allJobs={jobs.filter((job) => job.discretion === "contract")} />

                <h4 className="my-3 text-center">
                    More Jobs from our end
                </h4>
                {/* <JobCards allJobs={jobs} /> */}
            </div>
        </div>
    );
}

export default JobSection;