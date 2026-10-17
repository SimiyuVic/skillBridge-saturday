import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./pages/HomePage.jsx"
import { Routes, Route } from "react-router-dom"
import AboutPage from "./pages/About.jsx"
import ContactPage from "./pages/Contact.jsx"
import AllJobsPage from "./pages/AllJobs.jsx"
import JobDetails from "./pages/JobDetails.jsx"
import PublicLayout from "./layout/PublicLayout.jsx"
import AdminLayout from "./layout/AdminLayout.jsx"
import AdminDashboard from "./pages/admin/AdminDashboard.jsx"
import AdminEmployers from "./pages/admin/AdminEmployers.jsx"
import AdminJobSeekers from "./pages/admin/AdminJobSeekers.jsx"
import AdminJobs from "./pages/admin/AdminJobs.jsx"
import AdminSettings from "./pages/admin/AdminSettings.jsx"

function App() {

  return (
    <div>
      <Routes>
        {/* Public routes */}
        <Route element={ <PublicLayout /> } >
          <Route path="/" element={ <HomePage /> } />
          <Route path="/all-jobs" element={ <AllJobsPage />  } />
          <Route path="/about-us" element={ <AboutPage /> } />  
          <Route path="/contact-us" element={ <ContactPage /> }  />
          <Route path="/jobs/:id" element={ <JobDetails /> } />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout /> } >
          <Route index element={ <AdminDashboard /> } />
          <Route path="employers" element={ <AdminEmployers /> } />
          <Route path="job-seekers" element={ <AdminJobSeekers /> } />
          <Route path="jobs" element={ <AdminJobs /> } />
          <Route path="settings" element={ <AdminSettings /> } />
        </Route>

        {/* Employer routes */}
        <Route>

        </Route>

        {/* Job seeker routes */}
        <Route>

        </Route>
          
      </Routes>
    </div>
  )
}

export default App
