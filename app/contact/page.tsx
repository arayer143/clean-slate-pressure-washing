import Navbar from "@/components/Navbar/navbar"


import Footer from "@/components/Footer/footer"
import ContactPage from "@/components/Contact/contact-section"



export default function Contact() {
    return (


        <div className="flex flex-col min-h-screen">

        <Navbar />
            
          <main className="flex-3">
        
                <section className="w-full bg-gray-100 dark:bg-gray-800">
        
     <ContactPage />
        
          
                </section>
        
        
             
              <section className="w-full">
        
        <Footer />
        
              </section>
        
        
        
        
        
        
        
            </main>
        
        
          </div>




    )
}