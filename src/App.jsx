import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Courses from './Components/Pages/Courses'
import Enquiry from './Components/Pages/Enquiry'
import About from './Components/Pages/About'
import Testimonial from './Components/Pages/Testimonial'
import EventsAndGallery from './Components/Pages/EventsAndGallery'
import Contact from './Components/Pages/Contact'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NotFoundPage from './Components/Other Componets/NotFoundPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/events-and-gallery" element={<EventsAndGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
