<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
import ContentSection from './components/ContentSection'
// import AboutUs from './components/AboutUs';
// import Faq from './components/Faq';
// import Footer from './components/Footer';
import Navbar from './components/Navbar'
import PrinterFooter from './components/PrinterFooter'
// import ServicesSection from './components/Services';



function Home() {
  return (
    <>
      <div className='h-[3000px]'>
        <Navbar />
        <ContentSection/>
        <PrinterFooter/>
      </div>

    </>
  )
}
export default Home