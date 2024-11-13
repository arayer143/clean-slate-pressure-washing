import AboutPage from "@/components/About Page/about-page";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";





export default function Home() {
    return (
  
  
  
  
  
      <div className="flex flex-col min-h-screen">
 <Navbar />
      
    <main className="flex-3">
  
          <section className="w-full bg-gray-100 dark:bg-gray-800">

  <AboutPage />
    
          </section>
  
  
       
        <section className="w-full">
  
  <Footer />
  
        </section>
  
  
  
  
  
  
  
      </main>
  
  
    </div>
  )
  }