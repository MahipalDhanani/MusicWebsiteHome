import React from 'react'
import Header from '../Header/Header'
import { HOC } from '../Hoc/HOC'
import AutoSlider from '../Other Componets/Slider'
import CourseDisplay from './HomeCourse'
import AboutUs from './HomeAboutUs'
import Gallery from './HomeGallery'
import ServicesSection from './HomeServices'
import EnquiryForm from './HomeEnquiryForm'
import TestimonialSection from './HomeTestimonialSection'

function Home() {
    return (
        <>
            <AutoSlider />
            <div className='container mx-auto max-w'>
                <CourseDisplay />
            </div>
            <AboutUs />
            <div className='container mx-auto max-w py-16'>
                <Gallery />
            </div>
                <ServicesSection />
                <EnquiryForm />
                <TestimonialSection />
        </>
    )
}

export default HOC(Home)