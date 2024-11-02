import TestimonialsSection from "@/components/Home-Page/testimonials"
import Footer from "../components/Footer/footer"
import Hero from "../components/Hero/hero"
import AboutSection from "../components/Home-Page/about-us"
import Navbar from "../components/Navbar/navbar"
import PhotoGallery from "@/components/Gallery/photoGallery"

export default function Home() {
  return (





    <div className="flex flex-col min-h-screen">

<Navbar />
    
  <main className="flex-3">

        <section className="w-full bg-gray-100 dark:bg-gray-800">

    <Hero />
    <AboutSection />
    <PhotoGallery />
    <TestimonialsSection />

  
        </section>


     
      <section className="w-full">

<Footer />

      </section>







    </main>


  </div>
)
}