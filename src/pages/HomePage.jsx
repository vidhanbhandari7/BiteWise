import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
function HomePage() {
  return (
    <div className='h-screen bg-gradient-to-b from-[#fef9ef] via-[#fffbf5] to-[#fffdfc] font-poppins'>
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
