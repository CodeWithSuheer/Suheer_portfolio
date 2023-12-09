import HomePage from "./components/home/HomePage";
import Footer from "./common/footer/Footer";
import Navbar from "./common/header/Navbar";
import './App.css'
import AnimCursor from "./components/AnimCursor";

function App() {

  return (
    <>
      <AnimCursor />
      <Navbar />
      <HomePage />
      <Footer />
    </>
  )
}

export default App
