import BenefitsSection from './benefits'
import FAQSection from './faq'
import FeaturesSection from './features'
import FooterSection from './footer'
import HeroSection from './hero'
import Navbar from './navbar'
import PricingSection from './pricing'
import ServicesSection from './services'
import TestimonialSection from './testimonial'

const Page = () => (
  <>
    <Navbar />
    <HeroSection />
    <BenefitsSection />
    <FeaturesSection />
    <ServicesSection />
    <TestimonialSection />
    <PricingSection />
    <FAQSection />
    <FooterSection />
  </>
)

export default Page
