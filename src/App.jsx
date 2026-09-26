import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer"
import HomePage from "./pages/Home/HomePage.jsx"

function App() {

  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
