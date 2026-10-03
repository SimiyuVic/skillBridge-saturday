import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage.jsx"
import { Routes, Route } from "react-router-dom"
import AboutPage from "./pages/About.jsx"
import ContactPage from "./pages/Contact.jsx"
import AllJobsPage from "./pages/AllJobs.jsx"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/all-jobs" element={ <AllJobsPage />  } />
          <Route path="/about-us" element={ <AboutPage /> } />  
          <Route path="/contact-us" element={ <ContactPage /> }  />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
