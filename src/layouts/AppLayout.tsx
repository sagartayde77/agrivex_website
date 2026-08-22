import Navbar from './Navbar'
import Hero from '../sections/Hero/Hero'
import AgricultureVision from '../sections/AgricultureVision/AgricultureVision'
import AgrivexEcosystem from '../sections/AgrivexEcosystem/AgrivexEcosystem'
import StrategicCapabilities from '../sections/StrategicCapabilities/StrategicCapabilities'
import DealerPartnership from '../sections/DealerPartnership/DealerPartnership'
import FarmerSolutions from '../sections/FarmerSolutions/FarmerSolutions'
import Careers from '../sections/Careers/Careers'
import Contact from '../sections/Contact/Contact'
import Footer from '../sections/Footer/Footer'
import ScrollProgress from '../components/shared/ScrollProgress'
import BackToTop from '../components/shared/BackToTop'

function AppLayout() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="top">
        <Hero />
        <AgricultureVision />
        <AgrivexEcosystem />
        <StrategicCapabilities />
        <DealerPartnership />
        <FarmerSolutions />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default AppLayout