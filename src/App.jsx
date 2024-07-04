import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Expreiance from "./components/Expreiance"
import Footer from "./components/Footer"
import Contacts from "./components/Contacts"
import { Toaster } from "react-hot-toast"

function App() {


  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Expreiance />
        <Contacts />
        <Footer />
      </div>
      <Toaster/>
    </>
  )
}

export default App
